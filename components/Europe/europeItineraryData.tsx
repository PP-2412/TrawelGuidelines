import { TripType } from './europeData'

export interface Activity {
  time: 'Morning' | 'Afternoon' | 'Evening'
  title: string
  description: string
  duration?: string
  tripTypes?: TripType[] // If specified, only show for these trip types
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
const adventureActivity = (time: Activity['time'], title: string, description: string, duration?: string): Activity => ({
  time, title, description, duration, tripTypes: ['adventure']
})

const romanticActivity = (time: Activity['time'], title: string, description: string, duration?: string): Activity => ({
  time, title, description, duration, tripTypes: ['romantic']
})

const familyActivity = (time: Activity['time'], title: string, description: string, duration?: string): Activity => ({
  time, title, description, duration, tripTypes: ['family']
})

const friendsActivity = (time: Activity['time'], title: string, description: string, duration?: string): Activity => ({
  time, title, description, duration, tripTypes: ['friends']
})

const culturalActivity = (time: Activity['time'], title: string, description: string, duration?: string): Activity => ({
  time, title, description, duration, tripTypes: ['cultural']
})

const luxuryActivity = (time: Activity['time'], title: string, description: string, duration?: string): Activity => ({
  time, title, description, duration, tripTypes: ['luxury']
})

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
          { time: 'Evening', title: 'Champ de Mars Picnic', description: 'Grab some wine, cheese, and baguettes for a classic Parisian evening picnic with Eiffel Tower views.', duration: '2 hours' },
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
          adventureActivity('Afternoon', 'Bike the Gardens', 'Rent bikes to explore the vast 800-hectare gardens and Grand Canal.', '3 hours'),
          familyActivity('Afternoon', 'Row Boats on Grand Canal', 'Rent a rowboat and paddle along the Grand Canal with the family.', '1.5 hours'),
          { time: 'Evening', title: 'Return to Paris', description: 'Head back to Paris for a relaxed dinner in the Latin Quarter.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Notre-Dame & Latin Quarter',
        activities: [
          { time: 'Morning', title: 'Île de la Cité', description: 'Visit Notre-Dame Cathedral (exterior), Sainte-Chapelle, and the charming island.', duration: '3 hours' },
          culturalActivity('Morning', 'Sainte-Chapelle Stained Glass', 'Marvel at the 1,113 stained glass panels in this Gothic masterpiece.', '1.5 hours'),
          { time: 'Afternoon', title: 'Latin Quarter & Panthéon', description: 'Explore the student quarter, visit Shakespeare & Company bookstore, and the Panthéon.', duration: '3 hours' },
          friendsActivity('Afternoon', 'Café Culture Experience', 'Visit historic cafés like Les Deux Magots and Café de Flore.', '2 hours'),
          romanticActivity('Afternoon', 'Luxembourg Gardens', 'Romantic stroll through the beautiful Luxembourg Gardens.', '1.5 hours'),
          { time: 'Evening', title: 'Farewell Dinner', description: 'Enjoy a memorable final dinner at a classic Parisian restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'Conclude your Paris trip with an unforgettable fine dining experience.', '3 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'rome',
    cityName: 'Rome',
    days: [
      {
        day: 1,
        title: 'Ancient Rome',
        activities: [
          { time: 'Morning', title: 'Colosseum', description: 'Explore the iconic amphitheater where gladiators once battled. Book skip-the-line tickets in advance.', duration: '2-3 hours' },
          adventureActivity('Morning', 'Colosseum Underground Tour', 'Access the underground chambers and arena floor where gladiators prepared.', '3 hours'),
          luxuryActivity('Morning', 'Private Colosseum Experience', 'After-hours exclusive access with an archaeologist guide.', '2.5 hours'),
          { time: 'Afternoon', title: 'Roman Forum & Palatine Hill', description: 'Walk through the heart of ancient Rome and see where emperors once lived.', duration: '3 hours' },
          culturalActivity('Afternoon', 'Archaeological Deep Dive', 'Expert-led tour uncovering hidden details of Roman daily life.', '3.5 hours'),
          { time: 'Evening', title: 'Trastevere Dinner', description: 'Cross the Tiber to the charming Trastevere neighborhood for authentic Roman cuisine.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Trastevere Pub Crawl', 'Explore the vibrant nightlife of Rome\'s most bohemian neighborhood.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Vatican City',
        activities: [
          { time: 'Morning', title: 'Vatican Museums', description: 'Marvel at one of the world\'s greatest art collections, including the Sistine Chapel.', duration: '3-4 hours' },
          culturalActivity('Morning', 'Art History Vatican Tour', 'In-depth exploration of Raphael Rooms and Michelangelo\'s masterpieces.', '4 hours'),
          luxuryActivity('Morning', 'Early Entry Vatican', 'Enter before the crowds with a private guide and breakfast in the gardens.', '4 hours'),
          { time: 'Afternoon', title: 'St. Peter\'s Basilica', description: 'Visit the world\'s largest church and climb the dome for stunning views.', duration: '2-3 hours' },
          familyActivity('Afternoon', 'Dome Climb Adventure', 'Climb the 551 steps to the top of St. Peter\'s dome with the kids.', '1.5 hours'),
          { time: 'Evening', title: 'Castel Sant\'Angelo', description: 'Walk along the Tiber to the fortress and enjoy sunset views from the terrace.', duration: '2 hours' },
          romanticActivity('Evening', 'Rooftop Dinner with Vatican View', 'Romantic dinner overlooking St. Peter\'s dome at sunset.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Fountains & Piazzas',
        activities: [
          { time: 'Morning', title: 'Trevi Fountain', description: 'Visit Rome\'s most famous fountain early to beat the crowds. Throw a coin for good luck!', duration: '1 hour' },
          { time: 'Morning', title: 'Spanish Steps', description: 'Climb the famous 135 steps and enjoy views over the city.', duration: '1 hour' },
          romanticActivity('Morning', 'Coffee at Antico Caffè Greco', 'Share a romantic coffee at Rome\'s oldest café (since 1760).', '1 hour'),
          { time: 'Afternoon', title: 'Pantheon', description: 'Stand beneath the world\'s largest unreinforced concrete dome.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Piazza Navona', description: 'Admire Bernini\'s fountains and enjoy gelato in this beautiful baroque square.', duration: '2 hours' },
          familyActivity('Afternoon', 'Gelato Making Class', 'Learn to make authentic Italian gelato with the whole family.', '2 hours'),
          { time: 'Evening', title: 'Campo de\' Fiori', description: 'Experience the lively evening atmosphere and dine at a traditional trattoria.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Wine Bar Hopping', 'Sample Italian wines at enotecas around Campo de\' Fiori.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Borghese & Beyond',
        activities: [
          { time: 'Morning', title: 'Galleria Borghese', description: 'See Bernini\'s sculptures and Caravaggio paintings in this stunning villa museum.', duration: '2 hours' },
          culturalActivity('Morning', 'Baroque Art Masterclass', 'Expert guide explains the revolutionary techniques of Bernini and Caravaggio.', '2.5 hours'),
          luxuryActivity('Morning', 'Private Gallery Tour', 'Exclusive access and personal art historian guide.', '2.5 hours'),
          { time: 'Afternoon', title: 'Villa Borghese Gardens', description: 'Rent bikes or a rowboat and enjoy Rome\'s largest public park.', duration: '3 hours' },
          familyActivity('Afternoon', 'Zoo & Playground', 'Visit the Bioparco zoo and let kids play in the gardens.', '3 hours'),
          adventureActivity('Afternoon', 'Segway Tour', 'Explore the park and surrounding areas by Segway.', '2 hours'),
          { time: 'Evening', title: 'Via Veneto', description: 'Stroll down the famous street and enjoy aperitivo at a classic café.', duration: '2 hours' },
          romanticActivity('Evening', 'Sunset at Pincian Hill', 'Watch the sunset over Rome from this romantic viewpoint.', '1.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Hidden Rome & Departure',
        activities: [
          { time: 'Morning', title: 'Jewish Ghetto', description: 'Explore the historic Jewish Quarter and its ancient synagogue.', duration: '2 hours' },
          culturalActivity('Morning', 'Jewish Rome Walking Tour', 'Discover 2,000 years of Jewish history in Rome.', '2.5 hours'),
          { time: 'Morning', title: 'Teatro di Marcello', description: 'See the ancient theater that inspired the Colosseum design.', duration: '45 mins' },
          { time: 'Afternoon', title: 'Testaccio District', description: 'Visit the non-touristy neighborhood known for incredible food markets and restaurants.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Street Food Tour', 'Sample supplì, pizza al taglio, and other Roman street food.', '3 hours'),
          adventureActivity('Afternoon', 'Aventine Hill & Keyhole', 'Climb the hill and peek through the famous keyhole with a perfect St. Peter\'s view.', '1.5 hours'),
          { time: 'Evening', title: 'Final Roman Feast', description: 'Enjoy cacio e pepe, carbonara, and other Roman classics at a local favorite.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Private Chef Dinner', 'In-villa dinner prepared by a private chef with wine pairing.', '3.5 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'barcelona',
    cityName: 'Barcelona',
    days: [
      {
        day: 1,
        title: 'Gaudí\'s Barcelona',
        activities: [
          { time: 'Morning', title: 'Sagrada Família', description: 'Marvel at Gaudí\'s unfinished masterpiece. The interior light is best in the morning.', duration: '2-3 hours' },
          culturalActivity('Morning', 'Gaudí Architecture Tour', 'Expert guide explains Gaudí\'s unique organic architectural philosophy.', '3 hours'),
          luxuryActivity('Morning', 'Private Sagrada Família', 'Before-opening exclusive tour with tower access.', '2.5 hours'),
          { time: 'Afternoon', title: 'Park Güell', description: 'Explore the whimsical park with mosaic benches and city views.', duration: '2-3 hours' },
          familyActivity('Afternoon', 'Park Güell Scavenger Hunt', 'Fun activity finding Gaudí\'s hidden symbols and creatures.', '2 hours'),
          { time: 'Evening', title: 'Gràcia Neighborhood', description: 'Enjoy tapas and drinks in the bohemian Gràcia district near Park Güell.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Gràcia Bar Scene', 'Explore the local bar scene with craft cocktails and live music.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Gothic Quarter & La Rambla',
        activities: [
          { time: 'Morning', title: 'Gothic Quarter Walking Tour', description: 'Wander medieval streets, see the Cathedral, and discover hidden squares.', duration: '3 hours' },
          romanticActivity('Morning', 'El Call Jewish Quarter', 'Explore the atmospheric ancient Jewish neighborhood hand in hand.', '1.5 hours'),
          { time: 'Afternoon', title: 'La Boqueria Market', description: 'Sample fresh fruits, jamón, and seafood at Barcelona\'s most famous market.', duration: '2 hours' },
          familyActivity('Afternoon', 'Market Cooking Class', 'Shop at La Boqueria then cook a Spanish meal together.', '4 hours'),
          { time: 'Afternoon', title: 'La Rambla Stroll', description: 'Walk down the famous tree-lined pedestrian street to the waterfront.', duration: '1.5 hours' },
          { time: 'Evening', title: 'El Born District', description: 'Explore trendy boutiques and enjoy dinner in this hip neighborhood.', duration: '3 hours' },
          luxuryActivity('Evening', 'Michelin Star Tapas', 'Experience avant-garde Catalan cuisine at a top restaurant.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Beach & Waterfront',
        activities: [
          { time: 'Morning', title: 'Barceloneta Beach', description: 'Relax on the city beach and swim in the Mediterranean.', duration: '3 hours' },
          adventureActivity('Morning', 'Stand-Up Paddleboarding', 'Paddle along the Barcelona coastline with skyline views.', '2 hours'),
          familyActivity('Morning', 'Beach Games & Swimming', 'Build sandcastles and splash in the calm waters.', '3 hours'),
          { time: 'Afternoon', title: 'Port Olímpic', description: 'Explore the marina and enjoy fresh seafood at a beachfront restaurant.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Beach Club Day', 'Lounge at a trendy beach club with DJs and cocktails.', '4 hours'),
          luxuryActivity('Afternoon', 'Private Yacht Charter', 'Sail along the coast with champagne and canapés.', '4 hours'),
          { time: 'Evening', title: 'Poble Nou', description: 'Discover Barcelona\'s creative tech district with innovative restaurants.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Sunset Sailing', 'Romantic sunset sail with wine and tapas aboard.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Montjuïc & Art',
        activities: [
          { time: 'Morning', title: 'Montjuïc Castle', description: 'Take the cable car up to the hilltop fortress with panoramic views.', duration: '2 hours' },
          adventureActivity('Morning', 'Montjuïc Hiking', 'Hike the trails through gardens to reach the castle.', '2.5 hours'),
          { time: 'Afternoon', title: 'Fundació Joan Miró', description: 'Explore the work of Barcelona\'s beloved surrealist artist.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Catalan Art Deep Dive', 'Visit both Miró and MNAC for comprehensive Catalan art history.', '4 hours'),
          { time: 'Afternoon', title: 'Magic Fountain', description: 'Walk down through the gardens to the Magic Fountain area.', duration: '1 hour' },
          { time: 'Evening', title: 'Magic Fountain Show', description: 'Watch the spectacular light and music fountain show (seasonal).', duration: '1 hour' },
          familyActivity('Evening', 'Font Màgica Night Show', 'Kids love the colorful water, light, and music spectacular!', '1.5 hours'),
          romanticActivity('Evening', 'Hilltop Dinner', 'Romantic dinner at a Montjuïc restaurant with city lights below.', '2.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Eixample & Departure',
        activities: [
          { time: 'Morning', title: 'Casa Batlló', description: 'Tour Gaudí\'s fantastical apartment building with its dragon-scale roof.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Casa Milà (La Pedrera)', description: 'Explore another Gaudí masterpiece and its famous rooftop chimneys.', duration: '1.5 hours' },
          luxuryActivity('Morning', 'Private Modernisme Tour', 'Exclusive access to multiple Modernista buildings with expert guide.', '4 hours'),
          { time: 'Afternoon', title: 'Passeig de Gràcia Shopping', description: 'Browse designer stores and admire the street\'s architecture.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Vermouth Hour', 'Join locals for the tradition of vermouth and snacks before lunch.', '1.5 hours'),
          culturalActivity('Afternoon', 'Design Museum', 'Explore Catalan design from medieval times to present.', '2 hours'),
          { time: 'Evening', title: 'Final Tapas Feast', description: 'End your Barcelona trip with a classic tapas dinner in the Eixample.', duration: '2.5 hours' },
          adventureActivity('Evening', 'Flamenco Show', 'Experience passionate flamenco at an intimate tablao.', '2 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'amsterdam',
    cityName: 'Amsterdam',
    days: [
      {
        day: 1,
        title: 'Canal Ring & Museums',
        activities: [
          { time: 'Morning', title: 'Anne Frank House', description: 'Visit the poignant hiding place of Anne Frank. Book tickets well in advance!', duration: '1.5 hours' },
          culturalActivity('Morning', 'WWII Amsterdam Tour', 'Extended walking tour covering Dutch resistance and Jewish history.', '3 hours'),
          { time: 'Afternoon', title: 'Canal Cruise', description: 'See the city from the water on a classic canal boat tour.', duration: '1.5 hours' },
          romanticActivity('Afternoon', 'Private Canal Tour', 'Intimate boat tour with wine and cheese through quiet canals.', '2 hours'),
          luxuryActivity('Afternoon', 'Captain\'s Dinner Cruise', 'Gourmet dining while cruising Amsterdam\'s UNESCO waterways.', '3 hours'),
          { time: 'Evening', title: 'Jordaan District', description: 'Explore the trendy neighborhood with cafés, galleries, and restaurants.', duration: '3 hours' },
          friendsActivity('Evening', 'Jordaan Brown Café Crawl', 'Experience authentic Dutch "brown cafés" with local beers.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Art & Culture',
        activities: [
          { time: 'Morning', title: 'Rijksmuseum', description: 'See Rembrandt\'s Night Watch and Dutch Golden Age masterpieces.', duration: '3 hours' },
          culturalActivity('Morning', 'Dutch Masters Tour', 'In-depth exploration of Vermeer, Rembrandt, and Dutch painting.', '4 hours'),
          luxuryActivity('Morning', 'Private Rijksmuseum Tour', 'Before-hours access with personal art historian guide.', '3 hours'),
          { time: 'Afternoon', title: 'Van Gogh Museum', description: 'Explore the world\'s largest collection of Van Gogh\'s works.', duration: '2-3 hours' },
          familyActivity('Afternoon', 'Van Gogh Family Workshop', 'Interactive art workshop inspired by Van Gogh for kids.', '1.5 hours'),
          { time: 'Evening', title: 'Museumplein Area', description: 'Enjoy dinner near the museums and watch street performers.', duration: '2.5 hours' },
          adventureActivity('Evening', 'Night Bike Tour', 'Explore illuminated Amsterdam by bicycle after dark.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Beyond the Center',
        activities: [
          { time: 'Morning', title: 'Vondelpark', description: 'Rent bikes and cycle through Amsterdam\'s beloved green oasis.', duration: '2 hours' },
          familyActivity('Morning', 'Vondelpark Playground', 'Great playgrounds and splash pads for kids.', '2 hours'),
          adventureActivity('Morning', 'Full City Bike Tour', 'Cycle to hidden neighborhoods like De Pijp and Oost.', '4 hours'),
          { time: 'Afternoon', title: 'Albert Cuyp Market', description: 'Browse the largest street market in the Netherlands.', duration: '2 hours' },
          friendsActivity('Afternoon', 'De Pijp Food Tour', 'Sample stroopwafels, herring, and international cuisines.', '3 hours'),
          { time: 'Evening', title: 'De Pijp Nightlife', description: 'Experience Amsterdam\'s multicultural neighborhood restaurants and bars.', duration: '3 hours' },
          romanticActivity('Evening', 'Candlelit Restaurant', 'Romantic dinner at an intimate canal-side restaurant.', '2.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Countryside',
        activities: [
          { time: 'Morning', title: 'Zaanse Schans', description: 'Visit the famous windmill village and see traditional Dutch crafts.', duration: '3 hours' },
          familyActivity('Morning', 'Windmill Tour & Clog Making', 'Watch wooden shoes being made and climb inside a windmill.', '3 hours'),
          { time: 'Afternoon', title: 'Volendam & Marken', description: 'Explore picturesque fishing villages on the IJsselmeer.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Cheese Farm Visit', 'Taste artisan Gouda at a traditional cheese farm.', '1.5 hours'),
          adventureActivity('Afternoon', 'Countryside Cycling', 'Bike through tulip fields and polders (seasonal).', '4 hours'),
          { time: 'Evening', title: 'Return to Amsterdam', description: 'Head back for a final dinner in the city center.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Chef Experience', 'In-canal house dinner prepared by a private Dutch chef.', '3.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Hidden Amsterdam',
        activities: [
          { time: 'Morning', title: 'Begijnhof', description: 'Discover this hidden medieval courtyard in the city center.', duration: '1 hour' },
          { time: 'Morning', title: 'Nine Streets', description: 'Shop vintage boutiques and specialty stores in this charming area.', duration: '2 hours' },
          friendsActivity('Morning', 'Coffee Shop Culture', 'Explore Amsterdam\'s famous café culture and specialty coffee.', '2 hours'),
          culturalActivity('Morning', 'Hidden Courtyards Tour', 'Discover secret hofjes and hidden gems of Amsterdam.', '2.5 hours'),
          { time: 'Afternoon', title: 'NDSM Wharf', description: 'Explore the creative arts district in a former shipyard.', duration: '2.5 hours' },
          adventureActivity('Afternoon', 'Street Art Tour', 'Discover Amsterdam\'s vibrant street art scene.', '2 hours'),
          { time: 'Evening', title: 'Farewell Dutch Dinner', description: 'Enjoy traditional Dutch cuisine at a cozy restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'End your Amsterdam trip at a world-class restaurant.', '3 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'london',
    cityName: 'London',
    days: [
      {
        day: 1,
        title: 'Royal London',
        activities: [
          { time: 'Morning', title: 'Buckingham Palace', description: 'Watch the Changing of the Guard ceremony (check schedule).', duration: '1.5 hours' },
          luxuryActivity('Morning', 'Royal Mews & State Rooms', 'Access the Queen\'s horses and Buckingham Palace state rooms.', '3 hours'),
          { time: 'Afternoon', title: 'Westminster Abbey', description: 'Visit the coronation church and final resting place of monarchs.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Royal History Walk', 'Expert-guided tour through 1,000 years of British monarchy.', '3 hours'),
          { time: 'Afternoon', title: 'Big Ben & Parliament', description: 'See the iconic clock tower and Houses of Parliament.', duration: '1 hour' },
          { time: 'Evening', title: 'South Bank Walk', description: 'Stroll along the Thames from Westminster Bridge to Tower Bridge.', duration: '2 hours' },
          romanticActivity('Evening', 'London Eye at Sunset', 'Champagne experience in a private capsule at sunset.', '1.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Tower & City',
        activities: [
          { time: 'Morning', title: 'Tower of London', description: 'See the Crown Jewels and hear tales of prisoners and executions.', duration: '3 hours' },
          familyActivity('Morning', 'Yeoman Warder Tour', 'Beefeaters tell gruesome tales that kids love!', '3 hours'),
          { time: 'Afternoon', title: 'Tower Bridge', description: 'Walk across the glass floor and visit the Victorian Engine Rooms.', duration: '1.5 hours' },
          adventureActivity('Afternoon', 'Thames RIB Speedboat', 'High-speed boat ride from Tower Bridge to Canary Wharf.', '1 hour'),
          { time: 'Afternoon', title: 'Borough Market', description: 'Sample British and international foods at this historic market.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Borough Market Food Tour', 'Guided tasting tour with local food expert.', '3 hours'),
          { time: 'Evening', title: 'The Shard', description: 'Enjoy cocktails at one of Europe\'s highest bars with 360° views.', duration: '2 hours' },
          luxuryActivity('Evening', 'Shard Fine Dining', 'Gourmet dinner at Aqua Shard with stunning views.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Museums & Parks',
        activities: [
          { time: 'Morning', title: 'British Museum', description: 'Explore world history from the Rosetta Stone to Egyptian mummies.', duration: '3 hours' },
          culturalActivity('Morning', 'Ancient Civilizations Tour', 'Expert-led tour of Greek, Egyptian, and Mesopotamian galleries.', '3 hours'),
          familyActivity('Morning', 'Mummy Trail', 'Special family route through the museum\'s most exciting exhibits.', '2.5 hours'),
          { time: 'Afternoon', title: 'Hyde Park', description: 'Walk through the royal park, see Speakers\' Corner and Serpentine.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Serpentine Pedal Boats', 'Romantic boat ride on the Serpentine lake.', '1 hour'),
          adventureActivity('Afternoon', 'Hyde Park Cycling', 'Rent bikes and cycle through central London\'s parks.', '2 hours'),
          { time: 'Evening', title: 'Notting Hill', description: 'Explore pastel houses and dine in this charming neighborhood.', duration: '3 hours' },
          friendsActivity('Evening', 'Portobello Road Pubs', 'Pub crawl through Notting Hill\'s best locals.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'East London & Markets',
        activities: [
          { time: 'Morning', title: 'Shoreditch Street Art', description: 'Discover London\'s best street art in the hip East End.', duration: '2 hours' },
          adventureActivity('Morning', 'Street Art Tour', 'Guided tour with a local artist exploring hidden murals.', '2.5 hours'),
          friendsActivity('Morning', 'Brick Lane Brunch', 'Bagels, curry, and hipster cafés on this famous street.', '2 hours'),
          { time: 'Afternoon', title: 'Columbia Road Flower Market', description: 'Browse the famous Sunday flower market (Sundays only).', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Spitalfields Market', description: 'Explore vintage fashion, art, and food at this covered market.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Jack the Ripper Walk', 'Walking tour through the atmospheric Victorian streets.', '2 hours'),
          { time: 'Evening', title: 'Shoreditch Dining', description: 'Experience London\'s most innovative restaurants and bars.', duration: '3 hours' },
          luxuryActivity('Evening', 'Rooftop Bar Experience', 'Cocktails at exclusive East London rooftop venues.', '2.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'West End & Farewell',
        activities: [
          { time: 'Morning', title: 'Covent Garden', description: 'Watch street performers and browse boutiques in the piazza.', duration: '2 hours' },
          familyActivity('Morning', 'London Transport Museum', 'Interactive exhibits kids love, including old tube trains!', '2 hours'),
          { time: 'Afternoon', title: 'Soho & Chinatown', description: 'Explore vibrant streets, dim sum, and quirky shops.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Soho Bar Tour', 'Visit historic pubs and trendy cocktail bars.', '3 hours'),
          { time: 'Evening', title: 'West End Show', description: 'Catch a world-class musical or play in the Theatre District.', duration: '3 hours' },
          romanticActivity('Evening', 'Pre-Theatre Dinner', 'Elegant dinner before catching a romantic show.', '2 hours'),
          luxuryActivity('Evening', 'Premium Seats & Champagne', 'Best seats in the house with interval champagne.', '3.5 hours'),
          familyActivity('Evening', 'The Lion King', 'Perfect family-friendly West End spectacular.', '3 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'prague',
    cityName: 'Prague',
    days: [
      {
        day: 1,
        title: 'Old Town Discovery',
        activities: [
          { time: 'Morning', title: 'Old Town Square', description: 'Watch the Astronomical Clock and explore the historic square.', duration: '2 hours' },
          culturalActivity('Morning', 'Medieval Prague Tour', 'Learn about 1,000 years of Czech history with an expert guide.', '3 hours'),
          { time: 'Afternoon', title: 'Charles Bridge', description: 'Walk across the iconic Gothic bridge lined with baroque statues.', duration: '1.5 hours' },
          romanticActivity('Afternoon', 'Sunrise Charles Bridge', 'Experience the bridge at dawn with no crowds.', '1 hour'),
          { time: 'Afternoon', title: 'Jewish Quarter', description: 'Visit ancient synagogues and the historic cemetery.', duration: '2.5 hours' },
          { time: 'Evening', title: 'Traditional Czech Dinner', description: 'Try svíčková, goulash, and Czech beer at a local restaurant.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Beer Hall Experience', 'Authentic Czech beer hall with unlimited beer and food.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Prague Castle',
        activities: [
          { time: 'Morning', title: 'Prague Castle', description: 'Explore the world\'s largest ancient castle complex.', duration: '3 hours' },
          luxuryActivity('Morning', 'Private Castle Tour', 'Access restricted areas and the castle art gallery.', '4 hours'),
          { time: 'Afternoon', title: 'St. Vitus Cathedral', description: 'Marvel at the Gothic cathedral and climb the tower.', duration: '1.5 hours' },
          culturalActivity('Afternoon', 'Golden Lane', 'Discover where Franz Kafka wrote and alchemists worked.', '1 hour'),
          { time: 'Afternoon', title: 'Malá Strana', description: 'Stroll through the charming Lesser Town below the castle.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Petřín Hill Hike', 'Climb to the observation tower and mirror maze.', '2.5 hours'),
          { time: 'Evening', title: 'Lesser Town Taverns', description: 'Dine in historic cellars with excellent Czech cuisine.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Castle View Dinner', 'Romantic dinner overlooking the illuminated castle.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Art & Culture',
        activities: [
          { time: 'Morning', title: 'Mucha Museum', description: 'Discover the Art Nouveau masterpieces of Alphonse Mucha.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Art Nouveau Prague', 'Walking tour of Prague\'s stunning Art Nouveau architecture.', '3 hours'),
          { time: 'Afternoon', title: 'Dancing House', description: 'See the famous modern building and enjoy rooftop views.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Vyšehrad', description: 'Visit the hilltop fortress with stunning city views.', duration: '2.5 hours' },
          adventureActivity('Afternoon', 'Vltava River Kayaking', 'Paddle past Prague\'s monuments from the water.', '2.5 hours'),
          { time: 'Evening', title: 'Classical Concert', description: 'Attend a concert in a beautiful baroque church or concert hall.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Opera Box', 'VIP experience at the historic Prague State Opera.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Czech Countryside',
        activities: [
          { time: 'Morning', title: 'Český Krumlov', description: 'Visit the fairytale UNESCO town with a stunning castle.', duration: '5-6 hours' },
          romanticActivity('Morning', 'Private Český Krumlov Tour', 'Romantic exploration of this picture-perfect town.', '6 hours'),
          familyActivity('Morning', 'Castle Bear Moat', 'Kids love seeing the bears in the castle moat!', '30 mins'),
          adventureActivity('Afternoon', 'Vltava River Rafting', 'Gentle rafting through the beautiful Bohemian countryside.', '3 hours'),
          { time: 'Afternoon', title: 'Explore the Town', description: 'Wander cobblestone streets and browse local crafts.', duration: '2 hours' },
          { time: 'Evening', title: 'Return to Prague', description: 'Head back to Prague for a relaxed evening.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Prague Pub Crawl', 'Join a social pub crawl through Old Town.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Hidden Prague',
        activities: [
          { time: 'Morning', title: 'Strahov Monastery', description: 'See the stunning baroque library halls and monastery brewery.', duration: '2 hours' },
          culturalActivity('Morning', 'Medieval Monastery Tour', 'In-depth exploration of monastic life and precious manuscripts.', '2.5 hours'),
          { time: 'Afternoon', title: 'Letná Park', description: 'Enjoy panoramic views, beer garden, and the famous metronome.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Beer Bike Tour', 'Pedal and drink your way through Prague streets.', '2 hours'),
          familyActivity('Afternoon', 'Letná Playground & Views', 'Great playground with sweeping city views.', '2 hours'),
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final Czech feast at a top Prague restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Dining', 'End your trip at one of Prague\'s Michelin-starred restaurants.', '3 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'vienna',
    cityName: 'Vienna',
    days: [
      {
        day: 1,
        title: 'Imperial Vienna',
        activities: [
          { time: 'Morning', title: 'Schönbrunn Palace', description: 'Tour the Habsburg summer residence and its beautiful gardens.', duration: '3-4 hours' },
          luxuryActivity('Morning', 'Private Palace Tour', 'Access to private apartments and breakfast in the orangery.', '4 hours'),
          familyActivity('Morning', 'Schönbrunn Zoo', 'Visit the world\'s oldest zoo in the palace grounds.', '2.5 hours'),
          { time: 'Afternoon', title: 'Hofburg Palace', description: 'Explore the imperial apartments, treasury, and Spanish Riding School.', duration: '3 hours' },
          culturalActivity('Afternoon', 'Habsburg History Tour', 'Expert guide through 600 years of imperial history.', '3.5 hours'),
          { time: 'Evening', title: 'Traditional Heuriger', description: 'Enjoy wine and food at a traditional Viennese wine tavern.', duration: '3 hours' },
          friendsActivity('Evening', 'Vienna Wine Village', 'Visit Grinzing wine district for local wine and atmosphere.', '3.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Art & Music',
        activities: [
          { time: 'Morning', title: 'Kunsthistorisches Museum', description: 'Admire works by Vermeer, Bruegel, and the Habsburgs\' art collection.', duration: '3 hours' },
          culturalActivity('Morning', 'Old Masters Tour', 'Expert-led tour focusing on Dutch and Italian masterpieces.', '3.5 hours'),
          { time: 'Afternoon', title: 'Belvedere Palace', description: 'See Klimt\'s "The Kiss" and stunning baroque architecture.', duration: '2.5 hours' },
          romanticActivity('Afternoon', 'Belvedere Gardens', 'Romantic stroll through the terraced gardens with city views.', '1.5 hours'),
          { time: 'Evening', title: 'Vienna State Opera', description: 'Attend a world-class opera or ballet performance.', duration: '3 hours' },
          luxuryActivity('Evening', 'Opera Box & Champagne', 'Private box with champagne interval at the legendary opera house.', '4 hours'),
        ]
      },
      {
        day: 3,
        title: 'Coffee & Culture',
        activities: [
          { time: 'Morning', title: 'Coffee House Culture', description: 'Experience Vienna\'s UNESCO-listed café culture at historic cafés.', duration: '2 hours' },
          romanticActivity('Morning', 'Café Sacher Experience', 'Share the famous Sachertorte at the historic café.', '1.5 hours'),
          { time: 'Morning', title: 'St. Stephen\'s Cathedral', description: 'Climb the tower and visit the catacombs of this Gothic masterpiece.', duration: '2 hours' },
          adventureActivity('Morning', 'Catacomb Night Tour', 'Spooky evening tour of the cathedral\'s underground crypt.', '1 hour'),
          { time: 'Afternoon', title: 'Naschmarkt', description: 'Browse Vienna\'s most famous market for food and antiques.', duration: '2 hours' },
          familyActivity('Afternoon', 'Market Scavenger Hunt', 'Fun activity finding Turkish delight, cheese, and spices.', '1.5 hours'),
          { time: 'Evening', title: 'Wiener Schnitzel Dinner', description: 'Enjoy the iconic dish at a classic Viennese beisl.', duration: '2 hours' },
          friendsActivity('Evening', 'Wine Bar Hopping', 'Sample Austrian wines at cozy wine bars.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Danube & Beyond',
        activities: [
          { time: 'Morning', title: 'Danube Island', description: 'Explore Vienna\'s recreation area with walking and cycling paths.', duration: '2.5 hours' },
          adventureActivity('Morning', 'Danube Cycling', 'Bike along the famous Danube cycle path.', '3 hours'),
          familyActivity('Morning', 'Prater Amusement Park', 'Ride the historic Ferris wheel and enjoy the funfair.', '3 hours'),
          { time: 'Afternoon', title: 'Giant Ferris Wheel', description: 'Ride the iconic Riesenrad for panoramic city views.', duration: '1 hour' },
          romanticActivity('Afternoon', 'Private Ferris Wheel Dinner', 'Romantic dinner in a private Ferris wheel cabin.', '2 hours'),
          { time: 'Evening', title: 'Hundertwasserhaus', description: 'Visit the colorful apartment building by Friedensreich Hundertwasser.', duration: '1 hour' },
          luxuryActivity('Evening', 'Palace Concert & Dinner', 'Classical concert at Schönbrunn followed by gala dinner.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Hidden Vienna',
        activities: [
          { time: 'Morning', title: 'Albertina', description: 'See masterpieces by Monet, Picasso, and a vast graphics collection.', duration: '2 hours' },
          culturalActivity('Morning', 'Albertina Special Tour', 'Access to the Duke Albert apartments and private collection.', '2.5 hours'),
          { time: 'Afternoon', title: 'MuseumsQuartier', description: 'Explore modern art at MUMOK and Leopold Museum.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'MQ Courtyard Drinks', 'Relax with cocktails in the trendy museum courtyard.', '2 hours'),
          { time: 'Afternoon', title: 'Central Cemetery', description: 'Pay respects to Beethoven, Mozart, and other greats.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Farewell Viennese Dinner', description: 'End your trip with Tafelspitz at a classic Viennese institution.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Steirereck Dining', 'Unforgettable meal at one of the world\'s best restaurants.', '3.5 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'florence',
    cityName: 'Florence',
    days: [
      {
        day: 1,
        title: 'Renaissance Art',
        activities: [
          { time: 'Morning', title: 'Uffizi Gallery', description: 'See Botticelli\'s Birth of Venus and Renaissance masterpieces.', duration: '3-4 hours' },
          culturalActivity('Morning', 'Renaissance Art Masterclass', 'Art historian guides you through 300 years of artistic revolution.', '4 hours'),
          luxuryActivity('Morning', 'Private Uffizi Experience', 'Before-hours access with Prosecco and expert guide.', '3 hours'),
          { time: 'Afternoon', title: 'Duomo Complex', description: 'Climb Brunelleschi\'s Dome, baptistery, and bell tower.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Dome Climb', 'Ascend 463 steps for breathtaking city views.', '1.5 hours'),
          { time: 'Evening', title: 'Piazza della Signoria', description: 'Admire outdoor sculptures and dine near the Palazzo Vecchio.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Rooftop Aperitivo', 'Watch sunset over the Duomo from a secret rooftop bar.', '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Michelangelo & More',
        activities: [
          { time: 'Morning', title: 'Accademia Gallery', description: 'Stand before Michelangelo\'s David, one of the world\'s most famous sculptures.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Michelangelo Tour', 'Follow the master\'s footsteps through Florence.', '3 hours'),
          { time: 'Afternoon', title: 'San Lorenzo Market', description: 'Browse leather goods and souvenirs at the bustling outdoor market.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Leather Workshop Visit', 'Learn about Florentine leather craft and make your own item.', '2.5 hours'),
          { time: 'Afternoon', title: 'Medici Chapels', description: 'See Michelangelo\'s sculptures in the Medici family mausoleum.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Oltrarno District', description: 'Cross the Arno to explore artisan workshops and local restaurants.', duration: '3 hours' },
          luxuryActivity('Evening', 'Private Chef Dinner', 'Tuscan feast prepared in a Renaissance palazzo.', '3.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Ponte Vecchio & Pitti',
        activities: [
          { time: 'Morning', title: 'Ponte Vecchio', description: 'Walk across the famous bridge lined with jewelry shops.', duration: '1 hour' },
          romanticActivity('Morning', 'Gold Shopping', 'Find the perfect piece of Florentine gold jewelry together.', '1.5 hours'),
          { time: 'Morning', title: 'Palazzo Pitti', description: 'Explore the massive Renaissance palace and its galleries.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Boboli Gardens', description: 'Wander through the elaborate Renaissance gardens.', duration: '2 hours' },
          familyActivity('Afternoon', 'Garden Treasure Hunt', 'Find hidden fountains and grottos throughout the gardens.', '2.5 hours'),
          { time: 'Evening', title: 'Santo Spirito Square', description: 'Join locals for aperitivo in this authentic neighborhood piazza.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Oltrarno Bar Hopping', 'Explore craft cocktail bars in the artisan quarter.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Tuscan Countryside',
        activities: [
          { time: 'Morning', title: 'Chianti Wine Tour', description: 'Visit vineyards and taste Chianti Classico wines.', duration: '4-5 hours' },
          romanticActivity('Morning', 'Private Wine Estate', 'Exclusive tasting at a historic family-owned vineyard.', '4 hours'),
          luxuryActivity('Morning', 'Ferrari Wine Tour', 'Drive a Ferrari through Tuscan hills between wineries.', '6 hours'),
          { time: 'Afternoon', title: 'San Gimignano', description: 'Visit the medieval "Manhattan" with its famous towers.', duration: '2-3 hours' },
          familyActivity('Afternoon', 'Gelato Championship', 'Visit the shop that won world\'s best gelato!', '1 hour'),
          adventureActivity('Afternoon', 'Tuscan Cooking Class', 'Learn to make fresh pasta and Tuscan classics.', '4 hours'),
          { time: 'Evening', title: 'Return to Florence', description: 'Head back for a relaxed evening.', duration: '1.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Hidden Florence',
        activities: [
          { time: 'Morning', title: 'Piazzale Michelangelo', description: 'Enjoy the best panoramic view of Florence.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Morning Run or Yoga', 'Start the day with exercise and views.', '1 hour'),
          { time: 'Morning', title: 'San Miniato al Monte', description: 'Visit the beautiful Romanesque church above the city.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Santa Croce', description: 'See the tombs of Michelangelo, Galileo, and Machiavelli.', duration: '1.5 hours' },
          culturalActivity('Afternoon', 'Florentine Artisan Tour', 'Visit workshops of papermakers, goldsmiths, and leather workers.', '3 hours'),
          { time: 'Evening', title: 'Final Florentine Feast', description: 'Enjoy bistecca alla fiorentina and Chianti at a classic trattoria.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Enoteca Pinchiorri', 'Three Michelin star finale at Italy\'s finest restaurant.', '4 hours'),
        ]
      },
    ]
  },
  {
    cityId: 'venice',
    cityName: 'Venice',
    days: [
      {
        day: 1,
        title: 'St. Mark\'s & Grand Canal',
        activities: [
          { time: 'Morning', title: 'St. Mark\'s Basilica', description: 'Marvel at Byzantine mosaics and climb the campanile.', duration: '2 hours' },
          culturalActivity('Morning', 'Byzantine Art Tour', 'Detailed exploration of the basilica\'s gold mosaics.', '2.5 hours'),
          luxuryActivity('Morning', 'Skip-Line & Terrace Access', 'Private tour with rooftop terrace and Pala d\'Oro access.', '2 hours'),
          { time: 'Afternoon', title: 'Doge\'s Palace', description: 'Tour the seat of Venetian power and cross the Bridge of Sighs.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Secret Itineraries Tour', 'Access hidden rooms, torture chambers, and prison cells.', '1.5 hours'),
          { time: 'Evening', title: 'Gondola Ride', description: 'Glide through canals on Venice\'s iconic boats.', duration: '1 hour' },
          romanticActivity('Evening', 'Private Gondola at Sunset', 'Serenade and prosecco as you float through quiet canals.', '1.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Islands & Art',
        activities: [
          { time: 'Morning', title: 'Murano & Burano', description: 'Visit the glass-making island and colorful fishing village.', duration: '4 hours' },
          familyActivity('Morning', 'Glass Blowing Demo', 'Watch artisans create glass masterpieces.', '1 hour'),
          romanticActivity('Morning', 'Colorful Burano', 'Photograph the rainbow houses on this romantic island.', '2 hours'),
          { time: 'Afternoon', title: 'Accademia Gallery', description: 'See Venetian masterpieces by Titian and Tintoretto.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Venetian School Art Tour', 'Deep dive into Venice\'s unique artistic heritage.', '2.5 hours'),
          { time: 'Evening', title: 'Cicchetti & Wine', description: 'Hop between bacari (wine bars) sampling Venetian tapas.', duration: '3 hours' },
          friendsActivity('Evening', 'Cicchetti Bar Crawl', 'Join locals for the traditional evening bacaro tour.', '3.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Hidden Venice',
        activities: [
          { time: 'Morning', title: 'Rialto Market', description: 'Browse the historic fish and produce market.', duration: '1.5 hours' },
          familyActivity('Morning', 'Market & Cooking Class', 'Shop at Rialto then cook a Venetian meal together.', '4 hours'),
          { time: 'Afternoon', title: 'Cannaregio District', description: 'Explore the Jewish Ghetto and quiet residential areas.', duration: '2.5 hours' },
          adventureActivity('Afternoon', 'Kayak Through Canals', 'Paddle your own way through Venice\'s waterways.', '2.5 hours'),
          culturalActivity('Afternoon', 'Jewish Venice Tour', 'Discover 500 years of history in Europe\'s oldest ghetto.', '2 hours'),
          { time: 'Evening', title: 'Fondamenta Nuove', description: 'Dine with lagoon views away from the tourist crowds.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Private Palazzo Dinner', 'Exclusive dining in a historic Venetian palace.', '3.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Art & Architecture',
        activities: [
          { time: 'Morning', title: 'Peggy Guggenheim Collection', description: 'Modern art in a Grand Canal palazzo.', duration: '2 hours' },
          culturalActivity('Morning', 'Modern Art Venice', 'Combine Guggenheim with Punta della Dogana contemporary.', '4 hours'),
          { time: 'Afternoon', title: 'Santa Maria della Salute', description: 'Visit the magnificent baroque church at the canal entrance.', duration: '1 hour' },
          { time: 'Afternoon', title: 'Dorsoduro Walk', description: 'Stroll through the artistic university neighborhood.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Campo Santa Margherita', 'Join students for spritz at this lively square.', '2 hours'),
          { time: 'Evening', title: 'Sunset Vaporetto Ride', description: 'Take the water bus down the Grand Canal at golden hour.', duration: '1 hour' },
          romanticActivity('Evening', 'Grand Canal Dinner', 'Candlelit dinner overlooking the Grand Canal.', '2.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Impressions',
        activities: [
          { time: 'Morning', title: 'Early Morning St. Mark\'s', description: 'Experience the square without crowds at dawn.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Photography Walk', 'Capture Venice\'s magic in the soft morning light.', '2 hours'),
          { time: 'Morning', title: 'Libreria Acqua Alta', description: 'Visit the quirky bookshop with gondola bookshelves.', duration: '45 mins' },
          { time: 'Afternoon', title: 'Final Wandering', description: 'Get lost one last time in Venice\'s magical labyrinth.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Mask Making Workshop', 'Create your own Venetian carnival mask.', '2 hours'),
          luxuryActivity('Afternoon', 'Private Water Taxi Tour', 'See Venice from the water in style.', '1.5 hours'),
          { time: 'Evening', title: 'Farewell Venetian Feast', description: 'Final meal of risotto al nero and fresh seafood.', duration: '2.5 hours' },
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
        ]
      },
      {
        day: 2,
        title: 'Caldera & Volcano',
        activities: [
          { time: 'Morning', title: 'Catamaran Cruise', description: 'Sail around the caldera with swimming and snorkeling stops.', duration: '5 hours' },
          adventureActivity('Morning', 'Volcano Hike', 'Climb the active volcano and swim in hot springs.', '3 hours'),
          luxuryActivity('Morning', 'Private Yacht Charter', 'Exclusive sailing with gourmet lunch and wine.', '6 hours'),
          familyActivity('Morning', 'Family Boat Trip', 'Kid-friendly cruise with swimming and BBQ lunch.', '5 hours'),
          { time: 'Afternoon', title: 'Hot Springs', description: 'Swim in the volcanic hot springs near the caldera.', duration: '1 hour' },
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
          { time: 'Morning', title: 'Red Beach', description: 'Visit the dramatic red volcanic beach.', duration: '2.5 hours' },
          adventureActivity('Morning', 'Cliff Jumping & Snorkeling', 'Jump from cliffs and explore underwater caves.', '3 hours'),
          { time: 'Afternoon', title: 'Perissa Black Beach', description: 'Relax on the long black sand beach with beach bars.', duration: '3 hours' },
          familyActivity('Afternoon', 'Beach Club Day', 'Family-friendly beach club with loungers and activities.', '4 hours'),
          friendsActivity('Afternoon', 'Beach Party', 'Join the party at Perivolos beach bars.', '4 hours'),
          { time: 'Evening', title: 'Kamari Seaside Dinner', description: 'Fresh fish dinner right on the black sand beach.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Private Beach Dinner', 'Set up just for you on a quiet stretch of beach.', '2.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Final Moments',
        activities: [
          { time: 'Morning', title: 'Akrotiri Archaeological Site', description: 'Visit the "Minoan Pompeii" - an ancient city preserved by volcanic ash.', duration: '2 hours' },
          culturalActivity('Morning', 'Archaeology Tour', 'Expert guide brings the 3,600-year-old city to life.', '2.5 hours'),
          { time: 'Afternoon', title: 'Lighthouse Walk', description: 'Hike to the southwestern lighthouse for panoramic views.', duration: '2 hours' },
          adventureActivity('Afternoon', 'ATV Island Tour', 'Explore the island by quad bike.', '3 hours'),
          { time: 'Evening', title: 'Farewell Sunset', description: 'Watch your final Santorini sunset with local wine.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Villa Dinner', 'In-villa chef prepares your farewell Greek feast.', '3.5 hours'),
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
          { time: 'Afternoon', title: 'Lake Thun Cruise', description: 'Scenic boat ride on the turquoise alpine lake.', duration: '2.5 hours' },
          romanticActivity('Afternoon', 'Sunset Cruise', 'Private boat with champagne as the sun sets over peaks.', '2 hours'),
          familyActivity('Afternoon', 'Paddle Boat Adventure', 'Rent paddle boats and explore the lake shore.', '2 hours'),
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
        ]
      },
      {
        day: 3,
        title: 'Adventure Day',
        activities: [
          { time: 'Morning', title: 'Paragliding', description: 'Tandem flight over the Swiss Alps with stunning views.', duration: '2 hours' },
          adventureActivity('Morning', 'Canyoning', 'Navigate waterfalls and rock formations in alpine gorges.', '4 hours'),
          familyActivity('Morning', 'Trotti Bike', 'Scooter bikes down mountain trails - fun for all ages!', '2.5 hours'),
          romanticActivity('Morning', 'Hot Air Balloon', 'Float above the Alps at sunrise with champagne.', '3 hours'),
          { time: 'Afternoon', title: 'Harder Kulm', description: 'Take the funicular to the viewing platform for panoramic views.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Bungee Jumping', 'Take the plunge at the Stockhorn cable car.', '2 hours'),
          { time: 'Evening', title: 'Adventure Celebration', description: 'Toast your adventures over raclette and wine.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Gourmet Mountain Dinner', 'Fine dining at a mountaintop restaurant.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Lauterbrunnen Valley',
        activities: [
          { time: 'Morning', title: 'Trümmelbach Falls', description: 'See the glacial waterfalls inside the mountain.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Via Ferrata', 'Climb iron pathways on cliff faces with guide.', '4 hours'),
          { time: 'Afternoon', title: 'Mürren & Gimmelwald', description: 'Visit car-free villages accessible only by cable car.', duration: '3 hours' },
          familyActivity('Afternoon', 'Alpine Playground', 'Mountain playgrounds and easy walking paths.', '3 hours'),
          romanticActivity('Afternoon', 'Mountain Picnic', 'Pack a Swiss picnic and find a meadow with views.', '2.5 hours'),
          { time: 'Evening', title: 'Staubbach Falls', description: 'Watch the 300m waterfall light up at dusk.', duration: '1.5 hours' },
          luxuryActivity('Evening', 'Helicopter Glacier Landing', 'Land on a glacier for champagne with sunset views.', '2 hours'),
        ]
      },
      {
        day: 5,
        title: 'Lake & Departure',
        activities: [
          { time: 'Morning', title: 'Lake Brienz', description: 'Take a scenic cruise on the crystal-clear lake.', duration: '2 hours' },
          culturalActivity('Morning', 'Ballenberg Open-Air Museum', 'Explore 100+ historic Swiss buildings.', '3 hours'),
          familyActivity('Morning', 'Brienz Rothorn Railway', 'Ride the historic steam train up the mountain.', '3 hours'),
          { time: 'Afternoon', title: 'Giessbach Falls', description: 'Visit the stunning waterfall accessible by boat and funicular.', duration: '2.5 hours' },
          adventureActivity('Afternoon', 'Final Adventure', 'Jet boat ride or kayaking on Lake Brienz.', '2 hours'),
          { time: 'Evening', title: 'Farewell Swiss Dinner', description: 'Final fondue feast with mountain views.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Victoria-Jungfrau Dining', 'Grand hotel gala dinner experience.', '3 hours'),
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
        title: 'Ancient Acropolis',
        activities: [
          { time: 'Morning', title: 'Acropolis', description: 'Climb the sacred rock and marvel at the Parthenon, Erechtheion, and Temple of Athena Nike.', duration: '3 hours' },
          culturalActivity('Morning', 'Archaeological Expert Tour', 'In-depth exploration with an archaeologist explaining ancient Greek civilization.', '4 hours'),
          luxuryActivity('Morning', 'Private Sunrise Access', 'Early access before crowds with champagne breakfast overlooking Athens.', '3 hours'),
          { time: 'Afternoon', title: 'Acropolis Museum', description: 'Explore the stunning modern museum housing original Parthenon sculptures.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Kids Ancient Greece Workshop', 'Interactive activities teaching children about Greek myths and history.', '2 hours'),
          { time: 'Evening', title: 'Plaka District', description: 'Wander the oldest neighborhood in Athens with neoclassical architecture and tavernas.', duration: '3 hours' },
          romanticActivity('Evening', 'Rooftop Dinner', 'Candlelit dinner with illuminated Acropolis views.', '2.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Ancient Agora & Markets',
        activities: [
          { time: 'Morning', title: 'Ancient Agora', description: 'Walk where Socrates taught and see the well-preserved Temple of Hephaestus.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Philosophy Walking Tour', 'Follow in the footsteps of Plato, Aristotle, and Socrates.', '3 hours'),
          { time: 'Afternoon', title: 'Central Market', description: 'Experience the vibrant Varvakios Agora with fish, meat, and spices.', duration: '1.5 hours' },
          friendsActivity('Afternoon', 'Greek Food Tour', 'Sample souvlaki, spanakopita, and local street food with new friends.', '3 hours'),
          { time: 'Afternoon', title: 'Monastiraki Flea Market', description: 'Browse antiques, jewelry, and souvenirs in this bustling bazaar.', duration: '2 hours' },
          { time: 'Evening', title: 'Psyrri Nightlife', description: 'Explore the hip neighborhood with rooftop bars and live rebetiko music.', duration: '3 hours' },
          adventureActivity('Evening', 'Street Art Tour', 'Discover Athens\' vibrant urban art scene in Psyrri and Gazi.', '2 hours'),
        ]
      },
      {
        day: 3,
        title: 'Museums & Neighborhoods',
        activities: [
          { time: 'Morning', title: 'National Archaeological Museum', description: 'See the golden Mask of Agamemnon and treasures spanning 5,000 years.', duration: '3 hours' },
          culturalActivity('Morning', 'Bronze Age Greece Tour', 'Expert-led exploration of Mycenaean and Cycladic civilizations.', '3.5 hours'),
          luxuryActivity('Morning', 'Private Museum Tour', 'After-hours access with personal archaeologist guide.', '2.5 hours'),
          { time: 'Afternoon', title: 'Kolonaki', description: 'Explore the upscale neighborhood with designer boutiques and cafés.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Lycabettus Hill Sunset', 'Take the funicular to the highest point for panoramic views.', '2 hours'),
          { time: 'Evening', title: 'Gazi District', description: 'Former industrial area now home to Athens\' hottest restaurants and clubs.', duration: '3 hours' },
          friendsActivity('Evening', 'Gazi Bar Hopping', 'Experience Athens\' legendary nightlife scene.', '4 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Delphi or Coastal',
        activities: [
          { time: 'Morning', title: 'Delphi Day Trip', description: 'Visit the ancient sanctuary where the Oracle delivered prophecies.', duration: '5-6 hours' },
          culturalActivity('Morning', 'Sacred Way Pilgrimage', 'Walk the same path ancient Greeks took to consult the Oracle.', '6 hours'),
          adventureActivity('Morning', 'Cape Sounion & Temple', 'Drive the coastal road to the stunning Temple of Poseidon.', '4 hours'),
          familyActivity('Afternoon', 'Athens Riviera Beaches', 'Relax at family-friendly beaches along the coast.', '4 hours'),
          luxuryActivity('Afternoon', 'Private Yacht to Islands', 'Sail to nearby islands for swimming and seafood lunch.', '6 hours'),
          { time: 'Evening', title: 'Return to Athens', description: 'Head back for a relaxed evening in the city.', duration: '2 hours' },
          romanticActivity('Evening', 'Seaside Dining', 'Fresh seafood at a taverna by the water in Mikrolimano.', '2.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Hidden Athens & Departure',
        activities: [
          { time: 'Morning', title: 'Anafiotika', description: 'Discover the hidden Cycladic-style village on the slopes of the Acropolis.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Athens by Bike', 'Cycle through pedestrian streets and ancient sites.', '3 hours'),
          { time: 'Morning', title: 'Kerameikos Cemetery', description: 'Visit the ancient cemetery and often-overlooked archaeological site.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Stavros Niarchos Center', description: 'Explore the stunning modern cultural center with gardens and canal.', duration: '2 hours' },
          familyActivity('Afternoon', 'SNFCC Playground & Activities', 'Free family activities, playgrounds, and bike rentals.', '2.5 hours'),
          { time: 'Evening', title: 'Farewell Greek Feast', description: 'End with meze, moussaka, and ouzo at a traditional taverna.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'Contemporary Greek cuisine at a top Athens restaurant.', '3 hours'),
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
        title: 'Historic Center',
        activities: [
          { time: 'Morning', title: 'Marienplatz & Glockenspiel', description: 'Watch the famous clockenspiel show at the heart of Munich.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Old Town Walking Tour', 'Discover 850 years of Bavarian history through the historic center.', '3 hours'),
          { time: 'Afternoon', title: 'Viktualienmarkt', description: 'Sample Bavarian specialties at Munich\'s famous outdoor food market.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Beer Garden Lunch', 'Join locals at the market\'s beer garden for weisswurst and pretzels.', '2 hours'),
          { time: 'Afternoon', title: 'Frauenkirche', description: 'Climb the tower of Munich\'s iconic twin-domed cathedral.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Hofbräuhaus', description: 'Experience the world\'s most famous beer hall with live oompah music.', duration: '3 hours' },
          luxuryActivity('Evening', 'Private Brewery Tour', 'Behind-the-scenes at a historic Bavarian brewery with tasting.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Royal Munich',
        activities: [
          { time: 'Morning', title: 'Residenz Palace', description: 'Tour the former royal palace with 130 rooms and Treasury.', duration: '3 hours' },
          culturalActivity('Morning', 'Wittelsbach Dynasty Tour', 'Learn about the 700-year royal family that shaped Bavaria.', '3.5 hours'),
          luxuryActivity('Morning', 'Private Residenz Experience', 'Exclusive access to restricted rooms with art historian guide.', '3 hours'),
          { time: 'Afternoon', title: 'English Garden', description: 'Stroll through one of the world\'s largest urban parks.', duration: '2.5 hours' },
          adventureActivity('Afternoon', 'Eisbach River Surfing', 'Watch (or try!) surfing on the standing wave in the park.', '2 hours'),
          familyActivity('Afternoon', 'Chinese Tower Beer Garden', 'Family-friendly beer garden with playground and carousel.', '2.5 hours'),
          { time: 'Evening', title: 'Schwabing District', description: 'Explore the bohemian quarter with trendy restaurants and bars.', duration: '3 hours' },
          romanticActivity('Evening', 'Garden Restaurant', 'Romantic dinner in a hidden garden restaurant.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Art & Culture',
        activities: [
          { time: 'Morning', title: 'Alte Pinakothek', description: 'View masterpieces by Dürer, Rubens, and Rembrandt.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Three Pinakotheks Tour', 'Art journey from Old Masters to contemporary works.', '4 hours'),
          { time: 'Afternoon', title: 'BMW Welt & Museum', description: 'Explore automotive excellence and BMW\'s history.', duration: '3 hours' },
          familyActivity('Afternoon', 'BMW Junior Campus', 'Interactive workshops where kids design their own cars.', '2.5 hours'),
          adventureActivity('Afternoon', 'BMW Driving Experience', 'Test drive latest models on a professional track.', '2 hours'),
          { time: 'Evening', title: 'Olympiapark', description: 'Visit the 1972 Olympic site and take in sunset views.', duration: '2 hours' },
          friendsActivity('Evening', 'Olympiaturm Revolving Restaurant', 'Dinner with 360° views in the revolving tower restaurant.', '2.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Neuschwanstein',
        activities: [
          { time: 'Morning', title: 'Neuschwanstein Castle', description: 'Visit the fairy-tale castle that inspired Disney.', duration: '5-6 hours' },
          romanticActivity('Morning', 'Mary\'s Bridge Views', 'Cross the dramatic bridge for the iconic castle photo.', '1 hour'),
          luxuryActivity('Morning', 'Private Castle Tour', 'Skip-the-line with personal guide and helicopter return.', '6 hours'),
          { time: 'Afternoon', title: 'Hohenschwangau Castle', description: 'Tour King Ludwig\'s childhood home nearby.', duration: '1.5 hours' },
          adventureActivity('Afternoon', 'Alpine Lake Swimming', 'Swim in the crystal-clear Alpsee below the castles.', '2 hours'),
          familyActivity('Afternoon', 'Horse-Drawn Carriage', 'Ride up to the castle like royalty!', '30 mins'),
          { time: 'Evening', title: 'Return to Munich', description: 'Head back through beautiful Bavarian countryside.', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Nymphenburg & Departure',
        activities: [
          { time: 'Morning', title: 'Nymphenburg Palace', description: 'Explore the baroque summer palace and its parklands.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Royal Carriage Museum', 'See Ludwig II\'s ornate carriages and sleighs.', '1 hour'),
          romanticActivity('Morning', 'Palace Gardens Stroll', 'Wander through hidden pavilions and canal gardens.', '2 hours'),
          { time: 'Afternoon', title: 'Deutsches Museum', description: 'The world\'s largest science and technology museum.', duration: '3 hours' },
          familyActivity('Afternoon', 'Kids\' Kingdom', 'Interactive exhibits designed specifically for children.', '2.5 hours'),
          { time: 'Evening', title: 'Farewell Bavarian Feast', description: 'Enjoy schweinshaxe, knödel, and Bavarian beer one last time.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Tantris Dining', 'Legendary two-Michelin-star Bavarian fine dining.', '3 hours'),
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
        title: 'Cold War History',
        activities: [
          { time: 'Morning', title: 'Brandenburg Gate', description: 'Stand at the symbol of German reunification.', duration: '1 hour' },
          { time: 'Morning', title: 'Holocaust Memorial', description: 'Walk through the moving Field of Stelae and visit the information center.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Third Reich History Tour', 'Sobering walk through Nazi Berlin\'s most significant sites.', '3.5 hours'),
          { time: 'Afternoon', title: 'Checkpoint Charlie', description: 'Visit the famous Cold War crossing point and museum.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Berlin Wall Memorial', description: 'See preserved sections of the wall at Bernauer Strasse.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Trabi Safari', 'Drive a vintage East German Trabant car through the city.', '2.5 hours'),
          { time: 'Evening', title: 'East Side Gallery', description: 'View the longest remaining stretch of the Wall, now an art gallery.', duration: '1.5 hours' },
          friendsActivity('Evening', 'Kreuzberg Nightlife', 'Experience Berlin\'s legendary bar scene.', '4 hours'),
        ]
      },
      {
        day: 2,
        title: 'Museum Island',
        activities: [
          { time: 'Morning', title: 'Pergamon Museum', description: 'See the stunning Ishtar Gate and ancient architectural reconstructions.', duration: '3 hours' },
          culturalActivity('Morning', 'Ancient Civilizations Tour', 'Expert guide through 6,000 years of Middle Eastern history.', '4 hours'),
          luxuryActivity('Morning', 'Private Museum Access', 'Early entry with personal archaeologist and coffee.', '3 hours'),
          { time: 'Afternoon', title: 'Neues Museum', description: 'Home to the iconic bust of Nefertiti.', duration: '2 hours' },
          familyActivity('Afternoon', 'Egyptian Adventure', 'Mummies and pharaohs that kids love!', '2 hours'),
          { time: 'Evening', title: 'Berlin Cathedral', description: 'Climb the dome for sunset views and attend an organ concert.', duration: '2 hours' },
          romanticActivity('Evening', 'Spree River Dinner Cruise', 'Float past illuminated landmarks with gourmet dinner.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Alternative Berlin',
        activities: [
          { time: 'Morning', title: 'Street Art Tour', description: 'Explore murals and graffiti in Kreuzberg and Friedrichshain.', duration: '3 hours' },
          adventureActivity('Morning', 'Abandoned Places Tour', 'Explore Berlin\'s fascinating derelict buildings (legal tour!).', '3 hours'),
          friendsActivity('Morning', 'Flea Market Hopping', 'Browse vintage treasures at Mauerpark or Boxhagener Platz.', '2.5 hours'),
          { time: 'Afternoon', title: 'RAW Gelände', description: 'Visit the alternative culture hub in a former train yard.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Turkish Market', description: 'Experience multicultural Berlin at the Maybachufer market.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Prenzlauer Berg', description: 'Dine in the trendy neighborhood with excellent restaurants.', duration: '3 hours' },
          luxuryActivity('Evening', 'Rooftop Bar Experience', 'Cocktails at a hidden rooftop with skyline views.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Royal Potsdam',
        activities: [
          { time: 'Morning', title: 'Sanssouci Palace', description: 'Tour Frederick the Great\'s summer palace, the "Prussian Versailles."', duration: '3 hours' },
          romanticActivity('Morning', 'Palace Gardens Walk', 'Stroll through 700 acres of stunning landscaped gardens.', '2 hours'),
          luxuryActivity('Morning', 'Private Palace Tour', 'Exclusive access to restricted rooms and wine cellar.', '3.5 hours'),
          { time: 'Afternoon', title: 'Potsdam Old Town', description: 'Explore the charming Dutch and Russian quarters.', duration: '2 hours' },
          culturalActivity('Afternoon', 'Cold War Potsdam', 'Visit the Glienicke Bridge and Cecilienhof, site of the 1945 conference.', '2.5 hours'),
          familyActivity('Afternoon', 'Boat Tour', 'Cruise the lakes and rivers around Potsdam.', '2 hours'),
          { time: 'Evening', title: 'Return to Berlin', description: 'Head back for dinner in Mitte.', duration: '1.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Modern Berlin',
        activities: [
          { time: 'Morning', title: 'Reichstag Dome', description: 'Visit the glass dome of the German parliament (book ahead!).', duration: '1.5 hours' },
          { time: 'Morning', title: 'Tiergarten Park', description: 'Walk through Berlin\'s Central Park to the Victory Column.', duration: '2 hours' },
          adventureActivity('Morning', 'Bike Tour', 'Cycle through the park and past major landmarks.', '3 hours'),
          { time: 'Afternoon', title: 'KaDeWe Department Store', description: 'Browse Europe\'s largest department store and its legendary food hall.', duration: '2 hours' },
          familyActivity('Afternoon', 'Berlin Zoo', 'Visit one of the world\'s oldest and most famous zoos.', '3 hours'),
          { time: 'Evening', title: 'Farewell Berlin Dinner', description: 'Enjoy currywurst or modern German cuisine for your final meal.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'TV Tower Restaurant', 'Dine in the revolving restaurant with 360° views.', '2.5 hours'),
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
        title: 'Old Town & Lake',
        activities: [
          { time: 'Morning', title: 'Altstadt Walking Tour', description: 'Explore medieval lanes, guild houses, and the Grossmünster cathedral.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Reformation History', 'Follow in the footsteps of Zwingli through Protestant Zurich.', '2.5 hours'),
          { time: 'Afternoon', title: 'Lake Zurich Cruise', description: 'Relax on a scenic boat trip with mountain views.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Sunset Champagne Cruise', 'Private boat with champagne and alpine sunset.', '2.5 hours'),
          familyActivity('Afternoon', 'Swimming in the Lake', 'Join locals at the famous Seebäder (lake swimming areas).', '2 hours'),
          { time: 'Evening', title: 'Niederdorf', description: 'Dine in the charming "Dörfli" district with cozy restaurants.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Langstrasse Bars', 'Explore Zurich\'s trendiest nightlife district.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Art & Culture',
        activities: [
          { time: 'Morning', title: 'Kunsthaus Zurich', description: 'One of Switzerland\'s finest art museums with Giacometti and Monet.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Dada Art Tour', 'Explore where the Dada movement was born at Cabaret Voltaire.', '2 hours'),
          luxuryActivity('Morning', 'Private Art Collection Visit', 'Access to exclusive private galleries and collections.', '3 hours'),
          { time: 'Afternoon', title: 'Bahnhofstrasse Shopping', description: 'Window shop along one of the world\'s most exclusive streets.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Lindenhof Hill', description: 'Relax in the peaceful park with panoramic old town views.', duration: '1 hour' },
          { time: 'Evening', title: 'Swiss Fondue Dinner', description: 'Savor traditional cheese fondue at a cozy restaurant.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Candlelit Fondue', 'Intimate fondue experience in a historic cellar.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Day Trip - Mountains',
        activities: [
          { time: 'Morning', title: 'Uetliberg Mountain', description: 'Take the train to Zurich\'s local mountain for hiking and views.', duration: '3-4 hours' },
          adventureActivity('Morning', 'Mountain Biking', 'Rent bikes and ride the trails down from the summit.', '3 hours'),
          familyActivity('Morning', 'Planet Trail', 'Walk the scale model of the solar system along the ridge.', '2 hours'),
          { time: 'Afternoon', title: 'Rhine Falls Day Trip', description: 'Visit Europe\'s largest waterfall near Schaffhausen.', duration: '4 hours' },
          adventureActivity('Afternoon', 'Boat to the Falls', 'Get up close to the thundering waters by boat.', '1 hour'),
          romanticActivity('Afternoon', 'Stein am Rhein', 'Visit the picture-perfect medieval town nearby.', '2 hours'),
          { time: 'Evening', title: 'Zurich West', description: 'Explore the trendy former industrial district with hip restaurants.', duration: '3 hours' },
          friendsActivity('Evening', 'Viadukt Markets & Bars', 'Craft beer and street food under the railway arches.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Swiss Experience',
        activities: [
          { time: 'Morning', title: 'Swiss National Museum', description: 'Discover Swiss history and culture in a castle-like museum.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Swiss Watchmaking', 'Visit the Beyer Clock and Watch Museum.', '1.5 hours'),
          luxuryActivity('Morning', 'Private Watch Atelier', 'Tour an exclusive watchmaking workshop.', '2 hours'),
          { time: 'Afternoon', title: 'Chocolate Factory Tour', description: 'Visit Lindt Home of Chocolate with tastings.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Chocolate Course', 'Make your own Swiss chocolates with the kids.', '2 hours'),
          { time: 'Evening', title: 'Opera House', description: 'Attend a performance at the beautiful Zürich Opera.', duration: '3 hours' },
          luxuryActivity('Evening', 'VIP Opera Experience', 'Premium seats with champagne interval and backstage tour.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Lakeside & Departure',
        activities: [
          { time: 'Morning', title: 'Rapperswil Day Trip', description: 'Take a boat to the "City of Roses" with its medieval castle.', duration: '3 hours' },
          romanticActivity('Morning', 'Wooden Bridge Walk', 'Cross the historic wooden bridge across the lake.', '1 hour'),
          familyActivity('Morning', 'Knies Kinderzoo', 'Children\'s zoo with circus animals and rides.', '2.5 hours'),
          { time: 'Afternoon', title: 'Final Lake Time', description: 'Last swim or stroll along the lakeshore promenade.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Stand-Up Paddleboarding', 'SUP on the calm lake waters with mountain views.', '2 hours'),
          { time: 'Evening', title: 'Farewell Swiss Dinner', description: 'Final meal of rösti, veal Zurich-style, and Swiss wine.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Lake View Fine Dining', 'Michelin-starred farewell at a lakeside restaurant.', '3 hours'),
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
        title: 'Historic Belém',
        activities: [
          { time: 'Morning', title: 'Belém Tower', description: 'Visit the iconic 16th-century fortress on the Tagus River.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Jerónimos Monastery', description: 'Marvel at the Manueline architecture of this UNESCO masterpiece.', duration: '2 hours' },
          culturalActivity('Morning', 'Age of Discovery Tour', 'Learn about Portugal\'s maritime empire and explorers.', '3.5 hours'),
          { time: 'Afternoon', title: 'Pastéis de Belém', description: 'Try the original and famous Portuguese custard tarts.', duration: '45 mins' },
          familyActivity('Afternoon', 'Oceanarium', 'Visit Europe\'s largest indoor aquarium.', '2.5 hours'),
          { time: 'Evening', title: 'MAAT Museum', description: 'Explore the stunning contemporary art museum on the waterfront.', duration: '2 hours' },
          romanticActivity('Evening', 'Sunset at Padrão', 'Watch sunset from the Monument to the Discoveries.', '1.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Alfama & Fado',
        activities: [
          { time: 'Morning', title: 'Tram 28 Ride', description: 'Take the iconic yellow tram through historic neighborhoods.', duration: '1 hour' },
          { time: 'Morning', title: 'São Jorge Castle', description: 'Climb to the Moorish castle for panoramic city views.', duration: '2 hours' },
          adventureActivity('Morning', 'Alfama Walking Tour', 'Get lost in the winding medieval streets of the oldest district.', '2.5 hours'),
          { time: 'Afternoon', title: 'Flea Market', description: 'Browse the Feira da Ladra (Thieves\' Market) on Tuesday or Saturday.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Ginjinha Tasting', 'Sample the local cherry liqueur at historic bars.', '1.5 hours'),
          { time: 'Evening', title: 'Fado Dinner', description: 'Experience the soulful Portuguese music at an authentic fado house.', duration: '3 hours' },
          luxuryActivity('Evening', 'Private Fado Experience', 'Intimate performance with dinner in a historic palace.', '3.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Baixa & Bairro Alto',
        activities: [
          { time: 'Morning', title: 'Santa Justa Elevator', description: 'Ride the ornate Gothic elevator for city views.', duration: '45 mins' },
          { time: 'Morning', title: 'Praça do Comércio', description: 'Explore the grand waterfront square and Rua Augusta arch.', duration: '1.5 hours' },
          romanticActivity('Morning', 'Pink Street Brunch', 'Start the day on the Instagram-famous pink street.', '1.5 hours'),
          { time: 'Afternoon', title: 'Time Out Market', description: 'Sample Portuguese cuisine from top chefs under one roof.', duration: '2 hours' },
          familyActivity('Afternoon', 'LX Factory', 'Explore the creative hub with street art, shops, and food.', '2.5 hours'),
          { time: 'Evening', title: 'Bairro Alto', description: 'Experience Lisbon\'s famous nightlife district.', duration: '3 hours' },
          friendsActivity('Evening', 'Bar Crawl', 'Join locals hopping between the neighborhood\'s tiny bars.', '4 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Sintra',
        activities: [
          { time: 'Morning', title: 'Pena Palace', description: 'Visit the colorful Romantic palace on the hilltop.', duration: '2.5 hours' },
          romanticActivity('Morning', 'Palace Gardens', 'Wander through the enchanted forest and hidden grottoes.', '2 hours'),
          luxuryActivity('Morning', 'Private Sintra Tour', 'Exclusive access with vintage car transfers between palaces.', '5 hours'),
          { time: 'Afternoon', title: 'Quinta da Regaleira', description: 'Explore the mystical palace with its famous Initiation Well.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Moorish Castle Hike', 'Climb the 8th-century castle walls for stunning views.', '2 hours'),
          familyActivity('Afternoon', 'Monserrate Palace', 'Less crowded palace with beautiful gardens kids love.', '2 hours'),
          { time: 'Evening', title: 'Cascais Beach Town', description: 'Stop at the charming coastal town for seafood dinner.', duration: '2.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Hidden Lisbon',
        activities: [
          { time: 'Morning', title: 'National Tile Museum', description: 'Discover Portugal\'s beautiful azulejo tile tradition.', duration: '2 hours' },
          culturalActivity('Morning', 'Azulejo Art Walk', 'Hunt for the best tile work throughout the city.', '2.5 hours'),
          { time: 'Afternoon', title: 'Príncipe Real', description: 'Explore the trendy neighborhood with gardens and boutiques.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Wine Tasting', 'Sample Portuguese wines at a local wine bar.', '2 hours'),
          adventureActivity('Afternoon', 'Street Art Tour', 'Discover Lisbon\'s vibrant urban art scene.', '2 hours'),
          { time: 'Evening', title: 'Farewell Dinner', description: 'Final feast of bacalhau and vinho verde at a traditional tasca.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'Contemporary Portuguese cuisine at a top restaurant.', '3 hours'),
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
        title: 'Literary Dublin',
        activities: [
          { time: 'Morning', title: 'Trinity College', description: 'Visit the famous university and see the illuminated Book of Kells.', duration: '2 hours' },
          culturalActivity('Morning', 'Literary Walking Tour', 'Follow in the footsteps of Joyce, Yeats, and Wilde.', '2.5 hours'),
          luxuryActivity('Morning', 'Private Library Tour', 'After-hours access to the Long Room with an expert guide.', '2 hours'),
          { time: 'Afternoon', title: 'Grafton Street', description: 'Stroll the famous shopping street with live buskers.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'St. Stephen\'s Green', description: 'Relax in the beautiful Victorian park.', duration: '1 hour' },
          { time: 'Evening', title: 'Temple Bar', description: 'Experience Dublin\'s famous cultural quarter with pubs and music.', duration: '3 hours' },
          friendsActivity('Evening', 'Traditional Music Pub Crawl', 'Discover the best live trad sessions with local guides.', '4 hours'),
        ]
      },
      {
        day: 2,
        title: 'History & Guinness',
        activities: [
          { time: 'Morning', title: 'Kilmainham Gaol', description: 'Tour the historic prison central to Irish independence.', duration: '2 hours' },
          culturalActivity('Morning', 'Irish Revolution Tour', 'Deep dive into the 1916 Rising and War of Independence.', '3 hours'),
          { time: 'Afternoon', title: 'Guinness Storehouse', description: 'Learn about Ireland\'s famous stout and pour your own pint.', duration: '2.5 hours' },
          friendsActivity('Afternoon', 'Connoisseur Experience', 'Premium tasting with rare beers and food pairing.', '2.5 hours'),
          luxuryActivity('Afternoon', 'Private Brewery Tour', 'Behind-the-scenes access and meet the brewmasters.', '3 hours'),
          { time: 'Evening', title: 'Traditional Irish Dinner', description: 'Enjoy Irish stew, colcannon, and live music.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Sunset at Poolbeg Lighthouse', 'Walk the Great South Wall for sunset views.', '2 hours'),
        ]
      },
      {
        day: 3,
        title: 'Viking Dublin & North Side',
        activities: [
          { time: 'Morning', title: 'Dublin Castle', description: 'Explore the complex that was the seat of British rule.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Chester Beatty Library', description: 'See the stunning collection of manuscripts and art.', duration: '1.5 hours' },
          familyActivity('Morning', 'Dublinia Viking Museum', 'Interactive Viking and medieval Dublin for kids.', '2 hours'),
          { time: 'Afternoon', title: 'Christ Church Cathedral', description: 'Visit Dublin\'s oldest building with its spooky crypt.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Phoenix Park', description: 'Explore one of Europe\'s largest urban parks.', duration: '2.5 hours' },
          adventureActivity('Afternoon', 'Phoenix Park Cycling', 'Bike through the park and spot wild deer.', '2 hours'),
          { time: 'Evening', title: 'Smithfield', description: 'Dinner in the up-and-coming neighborhood.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Jameson Distillery', 'Whiskey tasting and cocktail making.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Wicklow & Coast',
        activities: [
          { time: 'Morning', title: 'Glendalough', description: 'Visit the stunning 6th-century monastic settlement in the Wicklow Mountains.', duration: '3-4 hours' },
          adventureActivity('Morning', 'Wicklow Way Hiking', 'Hike through the "Garden of Ireland."', '4 hours'),
          romanticActivity('Morning', 'Private Wicklow Tour', 'Scenic drive through mountains with picnic lunch.', '5 hours'),
          { time: 'Afternoon', title: 'Powerscourt Estate', description: 'Explore the stunning gardens and waterfall.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Powerscourt Playground', 'Beautiful grounds with excellent children\'s activities.', '2.5 hours'),
          { time: 'Evening', title: 'Coastal Village Dinner', description: 'Fresh seafood in Dalkey or Howth.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Howth Seafood Feast', 'Premium dining overlooking the harbor.', '3 hours'),
        ]
      },
      {
        day: 5,
        title: 'Georgian Dublin & Departure',
        activities: [
          { time: 'Morning', title: 'Merrion Square', description: 'Admire Georgian architecture and Oscar Wilde\'s statue.', duration: '1.5 hours' },
          { time: 'Morning', title: 'National Gallery', description: 'See works by Caravaggio, Vermeer, and Irish artists.', duration: '2 hours' },
          culturalActivity('Morning', 'Georgian Dublin Walk', 'Architectural tour of Dublin\'s elegant 18th-century heritage.', '2 hours'),
          { time: 'Afternoon', title: 'Little Museum of Dublin', description: 'Charming museum telling Dublin\'s 20th-century story.', duration: '1.5 hours' },
          familyActivity('Afternoon', 'Natural History Museum', 'The "Dead Zoo" fascinates children of all ages.', '1.5 hours'),
          { time: 'Evening', title: 'Farewell Irish Feast', description: 'Final dinner with live music at a traditional pub.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Chapter One Dining', 'Michelin-starred farewell to Dublin.', '3 hours'),
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
        title: 'Royal Mile',
        activities: [
          { time: 'Morning', title: 'Edinburgh Castle', description: 'Explore Scotland\'s most iconic fortress perched on Castle Rock.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Scottish History Tour', 'Learn about William Wallace, Mary Queen of Scots, and Scottish kings.', '3 hours'),
          luxuryActivity('Morning', 'Private Castle Tour', 'Skip-the-line with exclusive access to the Crown Jewels.', '2.5 hours'),
          { time: 'Afternoon', title: 'Royal Mile Walk', description: 'Stroll from the Castle to Holyrood, exploring closes and wynds.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Camera Obscura', 'Mind-bending illusions and rooftop views that kids love.', '2 hours'),
          { time: 'Evening', title: 'Grassmarket', description: 'Dine in the historic square surrounded by old pubs.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Historic Pub Crawl', 'Visit Scotland\'s oldest and most atmospheric pubs.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Old Town Mysteries',
        activities: [
          { time: 'Morning', title: 'St. Giles\' Cathedral', description: 'Visit the historic heart of Scottish Presbyterianism.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Real Mary King\'s Close', description: 'Descend into the underground streets frozen in time.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Ghost Tour', 'Explore Edinburgh\'s haunted vaults and graveyards.', '2 hours'),
          { time: 'Afternoon', title: 'Palace of Holyroodhouse', description: 'Visit the Queen\'s official Scottish residence.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Holyrood Abbey Ruins', 'Wander the atmospheric ruins hand in hand.', '1 hour'),
          { time: 'Evening', title: 'Whisky Experience', description: 'Take the barrel ride and taste Scotland\'s finest.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Whisky Tasting', 'Rare drams with a whisky expert in a historic setting.', '2.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'New Town & Arthur\'s Seat',
        activities: [
          { time: 'Morning', title: 'Arthur\'s Seat Hike', description: 'Climb the ancient volcano for panoramic city views.', duration: '2.5 hours' },
          adventureActivity('Morning', 'Sunrise Summit', 'Early hike to catch sunrise over the city.', '3 hours'),
          familyActivity('Morning', 'Dynamic Earth', 'Interactive science museum about our planet.', '2 hours'),
          { time: 'Afternoon', title: 'New Town Walk', description: 'Explore Georgian architecture and designer boutiques.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Scottish National Gallery', description: 'See works by Ramsay, Raeburn, and European masters.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Calton Hill Sunset', 'Watch sunset from the "Athens of the North."', '1.5 hours'),
          { time: 'Evening', title: 'Traditional Scottish Dinner', description: 'Try haggis, neeps, and tatties with whisky.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Rose Street Pub Crawl', 'Famous drinking street with historic pubs.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Highlands',
        activities: [
          { time: 'Morning', title: 'Scottish Highlands Tour', description: 'Journey through stunning landscapes to Loch Ness or Stirling.', duration: '5-6 hours' },
          adventureActivity('Morning', 'Loch Lomond Adventure', 'Kayaking, hiking, or speedboat on the bonnie loch.', '6 hours'),
          romanticActivity('Morning', 'Private Highland Tour', 'Exclusive driver-guide with castle visits and whisky.', '8 hours'),
          { time: 'Afternoon', title: 'Stirling Castle', description: 'Visit the castle where Scottish kings were crowned.', duration: '2 hours' },
          familyActivity('Afternoon', 'Highland Cows', 'Meet the iconic "heilan coos" at a farm visit.', '1.5 hours'),
          { time: 'Evening', title: 'Return to Edinburgh', description: 'Head back through beautiful Scottish countryside.', duration: '2 hours' },
          luxuryActivity('Evening', 'Castle Dinner', 'Exclusive dining in a historic Scottish castle.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Leith & Departure',
        activities: [
          { time: 'Morning', title: 'Royal Yacht Britannia', description: 'Tour the Queen\'s former floating palace in Leith.', duration: '2 hours' },
          culturalActivity('Morning', 'Royal Life at Sea', 'Learn about the fascinating life aboard the yacht.', '2.5 hours'),
          { time: 'Afternoon', title: 'Leith Waterfront', description: 'Explore the trendy harbor neighborhood with great restaurants.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Leith Wine & Dine', 'Sample Scotland\'s best seafood and local brews.', '2.5 hours'),
          familyActivity('Afternoon', 'Edinburgh Zoo', 'Meet the famous penguin parade!', '3 hours'),
          { time: 'Evening', title: 'Farewell Scottish Feast', description: 'Final dinner with Scottish game and whisky.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Number One Dining', 'Michelin-starred farewell at The Balmoral.', '3 hours'),
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
        title: 'Buda Castle District',
        activities: [
          { time: 'Morning', title: 'Buda Castle', description: 'Explore the UNESCO-listed castle complex with palace and museums.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Hungarian History Tour', 'Learn about 1,000 years of Hungarian royalty and revolution.', '3 hours'),
          luxuryActivity('Morning', 'Private Castle Access', 'Exclusive areas and wine tasting in historic cellars.', '3 hours'),
          { time: 'Afternoon', title: 'Fisherman\'s Bastion', description: 'Enjoy fairytale views from the neo-Gothic terrace.', duration: '1.5 hours' },
          romanticActivity('Afternoon', 'Bastion at Sunset', 'Watch the golden hour light up Parliament across the river.', '1.5 hours'),
          { time: 'Afternoon', title: 'Matthias Church', description: 'Visit the ornate church where Hungarian kings were crowned.', duration: '1 hour' },
          { time: 'Evening', title: 'Castle District Dining', description: 'Traditional Hungarian cuisine in the historic quarter.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Ruin Bar Exploration', 'Discover Budapest\'s famous ruin pubs.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Pest Side & Parliament',
        activities: [
          { time: 'Morning', title: 'Hungarian Parliament', description: 'Tour one of Europe\'s most stunning parliament buildings.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Communist History Tour', 'Visit Memento Park and learn about Soviet-era Hungary.', '3 hours'),
          { time: 'Afternoon', title: 'St. Stephen\'s Basilica', description: 'Climb the dome and see the holy right hand of Hungary\'s first king.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Andrássy Avenue', description: 'Stroll the elegant UNESCO boulevard to Heroes\' Square.', duration: '2 hours' },
          familyActivity('Afternoon', 'City Park', 'Explore the park with castle, zoo, and playgrounds.', '3 hours'),
          { time: 'Evening', title: 'Ruin Bars', description: 'Experience Szimpla Kert and the legendary ruin pub scene.', duration: '3 hours' },
          luxuryActivity('Evening', 'Rooftop Bar Hopping', 'Exclusive rooftop cocktails with Parliament views.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Thermal Baths',
        activities: [
          { time: 'Morning', title: 'Széchenyi Baths', description: 'Soak in Europe\'s largest thermal bath complex.', duration: '3 hours' },
          friendsActivity('Morning', 'Sparty Night (Planning)', 'Book tickets for the famous thermal bath party.', '30 mins'),
          luxuryActivity('Morning', 'Private Bath Experience', 'Exclusive access to historic Gellért Baths with treatments.', '4 hours'),
          { time: 'Afternoon', title: 'Jewish Quarter', description: 'Explore the historic neighborhood with synagogues and cafés.', duration: '2.5 hours' },
          culturalActivity('Afternoon', 'Great Synagogue Tour', 'Visit Europe\'s largest synagogue and Jewish heritage.', '2 hours'),
          { time: 'Evening', title: 'Jewish Quarter Dining', description: 'Modern Hungarian cuisine in the trendy district.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Danube Night Cruise', 'Float past illuminated landmarks with wine.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Danube Bend',
        activities: [
          { time: 'Morning', title: 'Szentendre', description: 'Explore the charming artists\' village with Serbian heritage.', duration: '2.5 hours' },
          romanticActivity('Morning', 'Art Gallery Hopping', 'Browse quaint galleries and cafés hand in hand.', '3 hours'),
          { time: 'Afternoon', title: 'Visegrád Castle', description: 'Visit the hilltop castle with stunning river views.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Zip Line Adventure', 'Zip across the Danube from the castle ruins.', '1 hour'),
          familyActivity('Afternoon', 'Medieval Games', 'Try archery and other medieval activities at the castle.', '2 hours'),
          { time: 'Afternoon', title: 'Esztergom Basilica', description: 'See Hungary\'s largest church on the border with Slovakia.', duration: '1.5 hours' },
          { time: 'Evening', title: 'Return to Budapest', description: 'Head back via scenic Danube route.', duration: '1.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Hidden Budapest',
        activities: [
          { time: 'Morning', title: 'Central Market Hall', description: 'Browse Hungary\'s largest and most beautiful market.', duration: '2 hours' },
          friendsActivity('Morning', 'Food Tour', 'Sample lángos, kürtőskalács, and Hungarian delicacies.', '3 hours'),
          { time: 'Afternoon', title: 'Gellért Hill', description: 'Climb to the Citadella for panoramic views.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Cave Church', 'Visit the unique church built into the hillside.', '1 hour'),
          romanticActivity('Afternoon', 'Liberty Statue Sunset', 'Watch sunset from beside the famous statue.', '1.5 hours'),
          { time: 'Evening', title: 'Farewell Hungarian Feast', description: 'Final meal of goulash, paprikás, and Tokaji wine.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Onyx Restaurant', 'Two-Michelin-star Hungarian fine dining.', '3 hours'),
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
        title: 'Harbor & Hygge',
        activities: [
          { time: 'Morning', title: 'Nyhavn', description: 'Stroll the iconic colorful harbor with historic ships.', duration: '1.5 hours' },
          romanticActivity('Morning', 'Canal Boat Tour', 'Glide through Copenhagen\'s canals with a loved one.', '1 hour'),
          { time: 'Afternoon', title: 'The Little Mermaid', description: 'Visit the famous statue inspired by Hans Christian Andersen.', duration: '45 mins' },
          { time: 'Afternoon', title: 'Kastellet', description: 'Explore the star-shaped 17th-century fortress.', duration: '1.5 hours' },
          familyActivity('Afternoon', 'Bike Around Town', 'Rent bikes and explore like a true Copenhagener.', '3 hours'),
          { time: 'Evening', title: 'Strøget Shopping', description: 'Browse Europe\'s longest pedestrian street.', duration: '2 hours' },
          friendsActivity('Evening', 'Vesterbro Bar Scene', 'Craft beer and cocktails in the trendy neighborhood.', '3 hours'),
        ]
      },
      {
        day: 2,
        title: 'Royal Copenhagen',
        activities: [
          { time: 'Morning', title: 'Amalienborg Palace', description: 'Watch the changing of the guard at the royal residence.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Royal History Walk', 'Learn about Danish monarchy and Queen Margrethe II.', '2.5 hours'),
          luxuryActivity('Morning', 'Private Palace Tour', 'Exclusive access to royal chambers with art historian.', '2.5 hours'),
          { time: 'Afternoon', title: 'Rosenborg Castle', description: 'See the Crown Jewels and royal treasures.', duration: '2 hours' },
          familyActivity('Afternoon', 'King\'s Garden', 'Picnic and play in the beautiful royal gardens.', '2 hours'),
          { time: 'Evening', title: 'Tivoli Gardens', description: 'Experience the world\'s second-oldest amusement park.', duration: '3 hours' },
          romanticActivity('Evening', 'Tivoli at Night', 'Magical lights and romantic atmosphere after dark.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Design & Food',
        activities: [
          { time: 'Morning', title: 'Design Museum', description: 'Explore Danish design from chairs to silverware.', duration: '2 hours' },
          culturalActivity('Morning', 'Danish Design Walk', 'Visit showrooms of Fritz Hansen, HAY, and more.', '3 hours'),
          { time: 'Afternoon', title: 'Torvehallerne Market', description: 'Sample gourmet foods at the covered market halls.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Smørrebrød Lunch', 'Try traditional Danish open-faced sandwiches.', '1.5 hours'),
          luxuryActivity('Afternoon', 'Cooking Class', 'Learn New Nordic cuisine with a local chef.', '3 hours'),
          { time: 'Evening', title: 'Meatpacking District', description: 'Dine in the trendy Kødbyen area.', duration: '3 hours' },
          adventureActivity('Evening', 'Street Food at Reffen', 'Explore Copenhagen\'s best street food market.', '2.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Alternative Copenhagen',
        activities: [
          { time: 'Morning', title: 'Christiania', description: 'Visit the famous freetown with alternative community.', duration: '2 hours' },
          adventureActivity('Morning', 'Christiania Art Walk', 'Explore the unique street art and architecture.', '2 hours'),
          { time: 'Afternoon', title: 'Christianshavn', description: 'Climb the spiral tower of Our Saviour\'s Church.', duration: '1.5 hours' },
          romanticActivity('Afternoon', 'Canal Picnic', 'Relax by the water in this charming neighborhood.', '2 hours'),
          { time: 'Afternoon', title: 'Copenhagen Opera', description: 'Tour the stunning waterfront opera house.', duration: '1.5 hours' },
          { time: 'Evening', title: 'New Nordic Dining', description: 'Experience Copenhagen\'s famous food scene.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Noma Experience', 'Dine at the world-famous restaurant (book months ahead!).', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Coast & Departure',
        activities: [
          { time: 'Morning', title: 'Louisiana Museum', description: 'Visit the world-class modern art museum by the sea.', duration: '3 hours' },
          culturalActivity('Morning', 'Art & Architecture Tour', 'Expert-led exploration of the museum and gardens.', '3 hours'),
          familyActivity('Morning', 'Children\'s Wing', 'Interactive art activities for kids.', '2 hours'),
          { time: 'Afternoon', title: 'Dragør', description: 'Explore the charming 18th-century fishing village.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Seaside Stroll', 'Walk the cobblestone streets and harbor.', '2 hours'),
          { time: 'Evening', title: 'Farewell Danish Dinner', description: 'Final meal of Danish specialties and aquavit.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Geranium', 'Three-Michelin-star farewell at Denmark\'s best.', '4 hours'),
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
        title: 'Gamla Stan',
        activities: [
          { time: 'Morning', title: 'Royal Palace', description: 'Explore the official residence of the Swedish monarchy.', duration: '2 hours' },
          { time: 'Morning', title: 'Changing of the Guard', description: 'Watch the ceremonial guard change (check schedule).', duration: '45 mins' },
          culturalActivity('Morning', 'Nobel Prize Museum', 'Learn about Nobel laureates and their discoveries.', '2 hours'),
          { time: 'Afternoon', title: 'Gamla Stan Walking', description: 'Wander the medieval alleys of the Old Town.', duration: '2.5 hours' },
          familyActivity('Afternoon', 'Smallest Street Hunt', 'Find Mårten Trotzigs Gränd, just 90cm wide!', '1.5 hours'),
          { time: 'Evening', title: 'Traditional Swedish Dinner', description: 'Try meatballs, gravlax, and schnapps.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Candlelit Cellar Restaurant', 'Intimate dinner in a medieval cellar.', '2.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Museums & Djurgården',
        activities: [
          { time: 'Morning', title: 'Vasa Museum', description: 'See the remarkably preserved 17th-century warship.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Maritime History Tour', 'Sweden\'s naval heritage with expert guide.', '3 hours'),
          familyActivity('Morning', 'ABBA Museum', 'Interactive tribute to Sweden\'s famous pop group.', '2 hours'),
          { time: 'Afternoon', title: 'Skansen Open-Air Museum', description: 'Experience 400 years of Swedish history and Nordic animals.', duration: '3 hours' },
          adventureActivity('Afternoon', 'Djurgården by Bike', 'Cycle the beautiful island with forests and views.', '2.5 hours'),
          { time: 'Evening', title: 'Östermalm Food Hall', description: 'Gourmet dining at the renovated market hall.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Fine Dining Experience', 'Contemporary Nordic cuisine at a top restaurant.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Modern Stockholm',
        activities: [
          { time: 'Morning', title: 'City Hall', description: 'Tour the venue of the Nobel Prize banquet and climb the tower.', duration: '2 hours' },
          luxuryActivity('Morning', 'Private City Hall Tour', 'Access to the Golden Hall and Blue Hall with expert.', '2 hours'),
          { time: 'Afternoon', title: 'Fotografiska', description: 'Visit one of the world\'s largest photography museums.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Monteliusvägen Walk', 'Scenic cliffside path with stunning city views.', '1.5 hours'),
          { time: 'Afternoon', title: 'Södermalm', description: 'Explore the hip neighborhood with boutiques and cafés.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Söder Bar Hopping', 'Discover Stockholm\'s best bars and nightlife.', '4 hours'),
          { time: 'Evening', title: 'SoFo District Dining', description: 'Trendy restaurants south of Folkungagatan.', duration: '2.5 hours' },
        ]
      },
      {
        day: 4,
        title: 'Archipelago Adventure',
        activities: [
          { time: 'Morning', title: 'Archipelago Boat Trip', description: 'Cruise through Stockholm\'s 30,000 islands.', duration: '5-6 hours' },
          adventureActivity('Morning', 'Kayaking Expedition', 'Paddle through the outer archipelago islands.', '5 hours'),
          romanticActivity('Morning', 'Private Boat Charter', 'Sail to secluded islands with gourmet picnic.', '6 hours'),
          familyActivity('Morning', 'Fjäderholmarna Day Trip', 'Easy island escape with crafts and ice cream.', '4 hours'),
          { time: 'Afternoon', title: 'Island Exploration', description: 'Swim, hike, and enjoy fika on an island.', duration: '3 hours' },
          { time: 'Evening', title: 'Seafood Dinner', description: 'Fresh seafood at a waterfront restaurant.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Island Restaurant', 'Exclusive dining on a private archipelago island.', '4 hours'),
        ]
      },
      {
        day: 5,
        title: 'Design & Departure',
        activities: [
          { time: 'Morning', title: 'Swedish Design Walk', description: 'Visit flagship stores of Swedish design brands.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Nordic Design Tour', 'Expert-led exploration of Scandinavian aesthetics.', '3 hours'),
          { time: 'Afternoon', title: 'Subway Art Tour', description: 'Explore the world\'s longest art gallery in Stockholm\'s metro.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Metro Photography Walk', 'Capture the stunning station artwork.', '2 hours'),
          familyActivity('Afternoon', 'Junibacken', 'Enter the world of Astrid Lindgren\'s stories.', '2.5 hours'),
          { time: 'Evening', title: 'Farewell Swedish Feast', description: 'Final smörgåsbord and Swedish specialties.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Frantzén', 'Three-Michelin-star finale at Sweden\'s best restaurant.', '4 hours'),
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
        title: 'Promenade & Old Town',
        activities: [
          { time: 'Morning', title: 'Promenade des Anglais', description: 'Stroll the famous seaside boulevard with stunning views.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Beachside Run or Bike', 'Start the day with exercise along the Mediterranean.', '1.5 hours'),
          { time: 'Afternoon', title: 'Vieux Nice', description: 'Explore the charming old town with Italian influences.', duration: '2.5 hours' },
          { time: 'Afternoon', title: 'Cours Saleya Market', description: 'Browse the flower market and local produce.', duration: '1.5 hours' },
          friendsActivity('Afternoon', 'Socca & Wine Tasting', 'Sample the local chickpea pancake with Provençal wines.', '2 hours'),
          { time: 'Evening', title: 'Castle Hill Sunset', description: 'Climb to the park for panoramic views at golden hour.', duration: '2 hours' },
          romanticActivity('Evening', 'Rooftop Dinner', 'Candlelit dinner overlooking the Baie des Anges.', '2.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Art & Beach',
        activities: [
          { time: 'Morning', title: 'Musée Matisse', description: 'Explore the largest collection of Matisse\'s works.', duration: '2 hours' },
          culturalActivity('Morning', 'Art of Nice Tour', 'Visit Matisse, Chagall, and modern art museums.', '4 hours'),
          { time: 'Afternoon', title: 'Beach Time', description: 'Relax on the famous pebbly beaches of Nice.', duration: '3 hours' },
          luxuryActivity('Afternoon', 'Private Beach Club', 'VIP loungers, cocktails, and Mediterranean views.', '4 hours'),
          familyActivity('Afternoon', 'Water Sports', 'Paddleboarding, kayaking, or snorkeling.', '2.5 hours'),
          { time: 'Evening', title: 'Port Area Dining', description: 'Fresh seafood in the charming port district.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Bar Crawl', 'Experience Nice\'s nightlife scene.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Day Trip - Monaco',
        activities: [
          { time: 'Morning', title: 'Monte Carlo Casino', description: 'Visit the legendary casino and watch the luxury cars.', duration: '2 hours' },
          luxuryActivity('Morning', 'Casino VIP Tour', 'Private tour of gaming rooms and champagne.', '2 hours'),
          { time: 'Afternoon', title: 'Prince\'s Palace', description: 'See the changing of the guard and old Monaco.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Oceanographic Museum', description: 'Jacques Cousteau\'s marine museum on the cliff.', duration: '2 hours' },
          familyActivity('Afternoon', 'Aquarium Visit', 'Kids love the sharks and exotic fish!', '2 hours'),
          adventureActivity('Afternoon', 'Formula 1 Track Walk', 'Walk the famous street circuit.', '1.5 hours'),
          { time: 'Evening', title: 'Monaco Dining', description: 'Glamorous dinner in the principality.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Larvotto Beach Sunset', 'Romantic walk on Monaco\'s main beach.', '1.5 hours'),
        ]
      },
      {
        day: 4,
        title: 'Eze & Perfume',
        activities: [
          { time: 'Morning', title: 'Eze Village', description: 'Explore the stunning medieval village perched above the sea.', duration: '2.5 hours' },
          romanticActivity('Morning', 'Exotic Garden', 'Wander through cacti with Mediterranean views.', '1.5 hours'),
          { time: 'Afternoon', title: 'Fragonard Perfume Factory', description: 'Tour and create your own perfume in Grasse.', duration: '2.5 hours' },
          luxuryActivity('Afternoon', 'Private Perfume Creation', 'Design your signature scent with a master perfumer.', '3 hours'),
          familyActivity('Afternoon', 'Grasse Discovery', 'Kid-friendly workshop making your own soap.', '2 hours'),
          { time: 'Evening', title: 'Return to Nice', description: 'Scenic drive along the Grande Corniche.', duration: '1 hour' },
          friendsActivity('Evening', 'Rooftop Aperitif', 'Cocktails with friends overlooking the bay.', '2 hours'),
        ]
      },
      {
        day: 5,
        title: 'Riviera & Departure',
        activities: [
          { time: 'Morning', title: 'Villefranche-sur-Mer', description: 'Visit the charming fishing village with a beautiful bay.', duration: '2 hours' },
          adventureActivity('Morning', 'Snorkeling Paradise', 'Crystal-clear waters perfect for underwater exploring.', '2 hours'),
          romanticActivity('Morning', 'Waterfront Coffee', 'Romantic morning by the colorful harbor.', '1.5 hours'),
          { time: 'Afternoon', title: 'Cap Ferrat', description: 'Explore the luxurious peninsula and Villa Ephrussi.', duration: '2.5 hours' },
          culturalActivity('Afternoon', 'Rothschild Gardens', 'Tour the stunning villa and nine themed gardens.', '2 hours'),
          { time: 'Evening', title: 'Farewell Riviera Dinner', description: 'Final Niçoise cuisine with salade Niçoise and pissaladière.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'End your Riviera trip at a top restaurant.', '3 hours'),
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
        title: 'Alcázar & Cathedral',
        activities: [
          { time: 'Morning', title: 'Real Alcázar', description: 'Explore the stunning Mudéjar palace and its gardens.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Moorish Architecture Tour', 'Expert guide explains 1,000 years of Arab influence.', '3 hours'),
          luxuryActivity('Morning', 'Private Alcázar Access', 'Before-opening tour with breakfast in the gardens.', '3 hours'),
          { time: 'Afternoon', title: 'Seville Cathedral', description: 'Visit the world\'s largest Gothic cathedral and Giralda tower.', duration: '2 hours' },
          { time: 'Afternoon', title: 'Barrio Santa Cruz', description: 'Get lost in the charming Jewish quarter\'s white alleys.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Hidden Patios Walk', 'Discover secret courtyards and orange blossom scents.', '2 hours'),
          { time: 'Evening', title: 'Tapas in Triana', description: 'Cross the bridge to the traditional neighborhood for dinner.', duration: '3 hours' },
          friendsActivity('Evening', 'Tapas Crawl', 'Join a social tapas tour through local bars.', '3.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Plaza de España & Flamenco',
        activities: [
          { time: 'Morning', title: 'Plaza de España', description: 'Marvel at the semicircular square from the 1929 Exposition.', duration: '1.5 hours' },
          familyActivity('Morning', 'Row Boats', 'Paddle the canal around the stunning plaza.', '1 hour'),
          { time: 'Morning', title: 'Maria Luisa Park', description: 'Stroll through the beautiful gardens behind the plaza.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Flamenco Museum', description: 'Learn about the passionate art form born in Andalusia.', duration: '1.5 hours' },
          adventureActivity('Afternoon', 'Flamenco Dance Class', 'Learn the basics from a professional dancer.', '1.5 hours'),
          { time: 'Evening', title: 'Flamenco Show', description: 'Experience authentic flamenco at an intimate tablao.', duration: '2 hours' },
          luxuryActivity('Evening', 'Private Flamenco & Dinner', 'Exclusive performance with gourmet Andalusian meal.', '3.5 hours'),
        ]
      },
      {
        day: 3,
        title: 'Metropol & Markets',
        activities: [
          { time: 'Morning', title: 'Metropol Parasol', description: 'Walk atop the world\'s largest wooden structure.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Sunrise Views', 'Catch the city waking up from the mushroom structure.', '1.5 hours'),
          { time: 'Afternoon', title: 'Mercado de Triana', description: 'Browse the neighborhood market with tapas and ceramics.', duration: '2 hours' },
          friendsActivity('Afternoon', 'Market Food Tour', 'Sample jamón, olives, and local specialties.', '3 hours'),
          culturalActivity('Afternoon', 'Ceramic Workshop', 'Learn traditional Sevillano tile painting.', '2 hours'),
          { time: 'Evening', title: 'Alameda de Hércules', description: 'Join locals in the trendy square with bars and restaurants.', duration: '3 hours' },
          romanticActivity('Evening', 'Rooftop Terrace', 'Sunset drinks overlooking the Giralda.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Córdoba',
        activities: [
          { time: 'Morning', title: 'Mezquita of Córdoba', description: 'Visit the stunning mosque-cathedral hybrid.', duration: '2 hours' },
          culturalActivity('Morning', 'Al-Andalus History', 'Deep dive into Moorish Spain with an expert guide.', '3 hours'),
          luxuryActivity('Morning', 'Private Mezquita Tour', 'Exclusive access and historical insights.', '2.5 hours'),
          { time: 'Afternoon', title: 'Jewish Quarter', description: 'Explore the medieval streets and synagogue.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Patio Festival Gardens', 'See the famous flower-filled courtyards.', '2 hours'),
          familyActivity('Afternoon', 'Roman Bridge Walk', 'Cross the ancient bridge over the Guadalquivir.', '45 mins'),
          { time: 'Evening', title: 'Return to Seville', description: 'High-speed train back for final evening.', duration: '45 mins' },
        ]
      },
      {
        day: 5,
        title: 'Hidden Seville',
        activities: [
          { time: 'Morning', title: 'Hospital de los Venerables', description: 'See the Velázquez Centro in this baroque church.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Casa de Pilatos', description: 'Tour the beautiful Renaissance palace with tile work.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Sevillano Art Walk', 'Discover hidden masterpieces throughout the city.', '3 hours'),
          { time: 'Afternoon', title: 'Guadalquivir River', description: 'Take a river cruise or walk along the riverfront.', duration: '2 hours' },
          adventureActivity('Afternoon', 'Kayaking the River', 'Paddle past Torre del Oro and historic bridges.', '2 hours'),
          { time: 'Evening', title: 'Farewell Andalusian Feast', description: 'Final meal of gazpacho, pescaíto frito, and fino sherry.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Rooftop Fine Dining', 'Michelin-starred farewell with cathedral views.', '3 hours'),
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
        title: 'City Walls & Old Town',
        activities: [
          { time: 'Morning', title: 'City Walls Walk', description: 'Circle the complete medieval walls with stunning views.', duration: '2.5 hours' },
          adventureActivity('Morning', 'Sunrise Walls Walk', 'Beat the crowds with an early morning climb.', '2 hours'),
          luxuryActivity('Morning', 'Private Walls Tour', 'Expert guide with historical insights and photo stops.', '3 hours'),
          { time: 'Afternoon', title: 'Stradun', description: 'Stroll the gleaming marble main street.', duration: '1.5 hours' },
          { time: 'Afternoon', title: 'Rector\'s Palace', description: 'Visit the Gothic-Renaissance palace and museum.', duration: '1.5 hours' },
          culturalActivity('Afternoon', 'Republic of Ragusa Tour', 'Learn about Dubrovnik\'s independent history.', '2.5 hours'),
          { time: 'Evening', title: 'Old Town Dining', description: 'Fresh Adriatic seafood in a centuries-old restaurant.', duration: '2.5 hours' },
          romanticActivity('Evening', 'Buža Bar Sunset', 'Cliff-side bar with sea views and magical sunsets.', '2 hours'),
        ]
      },
      {
        day: 2,
        title: 'Game of Thrones & Islands',
        activities: [
          { time: 'Morning', title: 'Game of Thrones Tour', description: 'Visit filming locations from King\'s Landing.', duration: '3 hours' },
          friendsActivity('Morning', 'GOT Photo Tour', 'Recreate iconic scenes with props and costumes.', '3 hours'),
          { time: 'Afternoon', title: 'Lokrum Island', description: 'Take the ferry to the botanical garden island.', duration: '3 hours' },
          familyActivity('Afternoon', 'Peacocks & Swimming', 'Kids love the peacocks and the Dead Sea swimming hole.', '3 hours'),
          romanticActivity('Afternoon', 'Monastery Gardens', 'Peaceful stroll through the botanical paradise.', '2 hours'),
          { time: 'Evening', title: 'Fort Lovrijenac', description: 'Visit the dramatic fortress featured in GOT.', duration: '1.5 hours' },
          luxuryActivity('Evening', 'Private Fort Dinner', 'Exclusive dining with fortress and sea views.', '3 hours'),
        ]
      },
      {
        day: 3,
        title: 'Sea Adventures',
        activities: [
          { time: 'Morning', title: 'Elafiti Islands Cruise', description: 'Sail to three islands for swimming and lunch.', duration: '5-6 hours' },
          adventureActivity('Morning', 'Sea Kayaking', 'Paddle along the city walls and to caves.', '3 hours'),
          luxuryActivity('Morning', 'Private Yacht Charter', 'Exclusive sailing with chef-prepared lunch.', '6 hours'),
          familyActivity('Morning', 'Beach Day Trip', 'Visit family-friendly Lapad or Banje beaches.', '4 hours'),
          { time: 'Afternoon', title: 'Cable Car', description: 'Ride to Mt. Srđ for panoramic views.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Hilltop Sunset', 'Watch the sun set over the Old Town from above.', '2 hours'),
          { time: 'Evening', title: 'Porporela Pier', description: 'Dine at the tip of the old harbor.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Bar Hopping', 'Discover hidden bars in the old town.', '3 hours'),
        ]
      },
      {
        day: 4,
        title: 'Day Trip - Montenegro',
        activities: [
          { time: 'Morning', title: 'Bay of Kotor', description: 'Visit the stunning fjord-like bay and medieval towns.', duration: '4-5 hours' },
          romanticActivity('Morning', 'Kotor Old Town', 'Wander hand-in-hand through the romantic streets.', '2 hours'),
          adventureActivity('Morning', 'Kotor Fortress Hike', 'Climb 1,350 steps for incredible bay views.', '2.5 hours'),
          { time: 'Afternoon', title: 'Perast & Our Lady of the Rocks', description: 'Visit the picturesque town and island church.', duration: '2 hours' },
          luxuryActivity('Afternoon', 'Private Speedboat Tour', 'Explore the bay in style with swimming stops.', '4 hours'),
          familyActivity('Afternoon', 'Beach Stop', 'Swim at one of Montenegro\'s beautiful beaches.', '2 hours'),
          { time: 'Evening', title: 'Return to Dubrovnik', description: 'Scenic drive back along the coast.', duration: '1.5 hours' },
        ]
      },
      {
        day: 5,
        title: 'Hidden Dubrovnik',
        activities: [
          { time: 'Morning', title: 'Morning Markets', description: 'Shop at Gundulićeva Poljana market for local products.', duration: '1.5 hours' },
          { time: 'Morning', title: 'Dominican Monastery', description: 'See the impressive cloister and religious art.', duration: '1.5 hours' },
          culturalActivity('Morning', 'Art & Architecture Walk', 'Discover hidden churches and Renaissance details.', '2.5 hours'),
          { time: 'Afternoon', title: 'War Photo Limited', description: 'Powerful photography exhibition on conflict.', duration: '1.5 hours' },
          adventureActivity('Afternoon', 'Cliff Jumping', 'Jump into the crystal-clear Adriatic at secret spots.', '2 hours'),
          { time: 'Evening', title: 'Farewell Dalmatian Feast', description: 'Final meal of fresh fish, peka, and local wine.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Restaurant 360°', 'Michelin-starred dining on the city walls.', '3 hours'),
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
        title: 'Positano',
        activities: [
          { time: 'Morning', title: 'Arrive in Positano', description: 'Settle into the vertical village tumbling down to the sea.', duration: '2 hours' },
          luxuryActivity('Morning', 'Private Transfer', 'Arrive in style with a private driver from Naples.', '1.5 hours'),
          { time: 'Afternoon', title: 'Beach & Town', description: 'Relax on the pebble beach and explore boutiques.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Spiaggia Grande', 'Swim and sunbathe on the iconic beach.', '3 hours'),
          familyActivity('Afternoon', 'Boat Rental', 'Rent a small boat and explore the coastline.', '3 hours'),
          { time: 'Evening', title: 'Cliffside Dinner', description: 'Dine on a terrace overlooking the twinkling town.', duration: '2.5 hours' },
          friendsActivity('Evening', 'Aperitivo Hopping', 'Sample Aperol Spritz at different panoramic bars.', '2.5 hours'),
        ]
      },
      {
        day: 2,
        title: 'Path of the Gods',
        activities: [
          { time: 'Morning', title: 'Path of the Gods Hike', description: 'Walk the spectacular coastal trail with stunning views.', duration: '4-5 hours' },
          adventureActivity('Morning', 'Full Trail Adventure', 'Complete the entire route from Bomerano to Positano.', '5 hours'),
          familyActivity('Morning', 'Shorter Section', 'Family-friendly portion of the trail with views.', '2.5 hours'),
          { time: 'Afternoon', title: 'Nocelle Village', description: 'Explore the peaceful mountain village.', duration: '1.5 hours' },
          romanticActivity('Afternoon', 'Picnic with Views', 'Pack a lunch and find a scenic spot on the trail.', '2 hours'),
          { time: 'Evening', title: 'Recovery Dinner', description: 'Celebrate your hike with pasta and local wine.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Spa Treatment', 'Relax sore muscles at a cliffside spa.', '2 hours'),
        ]
      },
      {
        day: 3,
        title: 'Amalfi & Ravello',
        activities: [
          { time: 'Morning', title: 'Amalfi Town', description: 'Explore the historic maritime republic and cathedral.', duration: '2.5 hours' },
          culturalActivity('Morning', 'Paper Museum', 'Learn about Amalfi\'s famous paper-making tradition.', '1.5 hours'),
          { time: 'Afternoon', title: 'Ravello', description: 'Visit the hilltown known for its gardens and villas.', duration: '3 hours' },
          romanticActivity('Afternoon', 'Villa Rufolo Gardens', 'Wander the romantic terraced gardens.', '1.5 hours'),
          luxuryActivity('Afternoon', 'Villa Cimbrone', 'Visit the infinity terrace with the best views on the coast.', '2 hours'),
          { time: 'Evening', title: 'Ravello Concert', description: 'Attend a classical music performance (seasonal).', duration: '2 hours' },
          friendsActivity('Evening', 'Limoncello Tasting', 'Sample the local lemon liqueur at different bars.', '2 hours'),
        ]
      },
      {
        day: 4,
        title: 'Capri Day Trip',
        activities: [
          { time: 'Morning', title: 'Ferry to Capri', description: 'Take the scenic ferry to the glamorous island.', duration: '1 hour' },
          { time: 'Morning', title: 'Blue Grotto', description: 'Visit the famous sea cave with glowing blue water.', duration: '1.5 hours' },
          adventureActivity('Morning', 'Island Boat Tour', 'Circumnavigate Capri with swimming stops.', '3 hours'),
          { time: 'Afternoon', title: 'Capri Town & Anacapri', description: 'Explore both towns, take the chairlift to Monte Solaro.', duration: '3 hours' },
          luxuryActivity('Afternoon', 'Designer Shopping', 'Browse the exclusive boutiques of Capri town.', '2 hours'),
          familyActivity('Afternoon', 'Gardens of Augustus', 'Beautiful gardens with views of the Faraglioni rocks.', '1.5 hours'),
          { time: 'Evening', title: 'Return to Amalfi', description: 'Ferry back with sunset over the coast.', duration: '1 hour' },
          romanticActivity('Evening', 'Sunset Ferry', 'Watch the coastline glow golden from the boat.', '1.5 hours'),
        ]
      },
      {
        day: 5,
        title: 'Coastal Exploration',
        activities: [
          { time: 'Morning', title: 'Boat Tour', description: 'Hire a private boat to explore grottoes and hidden beaches.', duration: '4 hours' },
          adventureActivity('Morning', 'Snorkeling Adventure', 'Discover underwater caves and marine life.', '3 hours'),
          luxuryActivity('Morning', 'Luxury Yacht Day', 'Full-day yacht with crew, lunch, and champagne.', '6 hours'),
          { time: 'Afternoon', title: 'Furore Fjord', description: 'Visit the tiny beach village in a dramatic inlet.', duration: '2 hours' },
          romanticActivity('Afternoon', 'Secluded Beach', 'Find a hidden cove for private sunbathing.', '3 hours'),
          familyActivity('Afternoon', 'Lemon Grove Visit', 'See how limoncello is made and taste fresh lemons.', '2 hours'),
          { time: 'Evening', title: 'Farewell Amalfi Dinner', description: 'Final feast of fresh seafood, limoncello, and sea views.', duration: '2.5 hours' },
          luxuryActivity('Evening', 'Michelin Star Dining', 'End your trip at a top Amalfi Coast restaurant.', '3 hours'),
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

// Generate a complete itinerary for selected cities
// Generate a complete itinerary for selected cities
export const generateFullItinerary = (
  selectedCities: Array<{ cityId: string; nights: number; tripType?: TripType | null }>,
  globalTripType: TripType | null
): Array<{ day: number; cityName: string; title: string; activities: Activity[]; tripType: TripType | null }> => {
  const fullItinerary: Array<{ day: number; cityName: string; title: string; activities: Activity[]; tripType: TripType | null }> = []
  let currentDay = 1

  selectedCities.forEach(({ cityId, nights, tripType }) => {
    const cityItinerary = getCityItinerary(cityId)
    if (!cityItinerary) return
    
    // Use per-city tripType if available, otherwise fall back to global
    const effectiveTripType = tripType ?? globalTripType

    for (let i = 0; i < nights; i++) {
      const dayIndex = Math.min(i, cityItinerary.days.length - 1)
      const dayData = cityItinerary.days[dayIndex]
      
      const filteredActivities = filterActivitiesByTripType(dayData.activities, effectiveTripType)
      
      fullItinerary.push({
        day: currentDay,
        cityName: cityItinerary.cityName,
        title: dayData.title,
        activities: filteredActivities,
        tripType: effectiveTripType
      })
      
      currentDay++
    }
  })

  return fullItinerary
}
