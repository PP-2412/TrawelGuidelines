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
          adventureActivity('Afternoon', 'Aventine Hill & Keyhole', description: 'Climb the hill and peek through the famous keyhole with a perfect St. Peter\'s view.', '1.5 hours'),
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
export const generateFullItinerary = (
  selectedCities: Array<{ cityId: string; nights: number }>,
  tripType: TripType | null
): Array<{ day: number; cityName: string; title: string; activities: Activity[] }> => {
  const fullItinerary: Array<{ day: number; cityName: string; title: string; activities: Activity[] }> = []
  let currentDay = 1

  selectedCities.forEach(({ cityId, nights }) => {
    const cityItinerary = getCityItinerary(cityId)
    if (!cityItinerary) return

    for (let i = 0; i < nights; i++) {
      const dayIndex = Math.min(i, cityItinerary.days.length - 1)
      const dayData = cityItinerary.days[dayIndex]
      
      const filteredActivities = filterActivitiesByTripType(dayData.activities, tripType)
      
      fullItinerary.push({
        day: currentDay,
        cityName: cityItinerary.cityName,
        title: dayData.title,
        activities: filteredActivities
      })
      
      currentDay++
    }
  })

  return fullItinerary
}
