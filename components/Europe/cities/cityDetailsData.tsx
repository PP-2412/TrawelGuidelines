// City-specific detailed data for individual city pages
import { Season } from '../europeData'

export interface TransportHub {
  name: string
  type: 'airport' | 'train' | 'bus'
  description: string
  distance?: string
}

export interface Attraction {
  name: string
  description: string
  image: string
}

export interface CuisineItem {
  name: string
  description: string
  image: string
}

export interface NightlifeSpot {
  name: string
  type: string
  description: string
  image: string
}

export interface CityDetails {
  id: string
  name: string
  country: string
  heroImage: string
  description: string
  longDescription: string
  transportHubs: TransportHub[]
  mustVisit: Attraction[]
  localCuisine: CuisineItem[]
  afterDark: NightlifeSpot[]
}

// City details data
export const cityDetails: Record<string, CityDetails> = {
  // ITALY
  rome: {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80',
    description: 'The Eternal City where ancient history meets vibrant modern life.',
    longDescription: 'Rome is a living museum where every cobblestone tells a story spanning nearly 3,000 years. From the mighty Colosseum to the sacred Vatican, from bustling piazzas to quiet trattorias, Rome captivates with its perfect blend of ancient grandeur and Italian dolce vita. Wander through neighborhoods where Renaissance palaces stand alongside ancient ruins, and where a simple espresso at a corner bar becomes a moment of pure Roman pleasure.',
    transportHubs: [
      { name: 'Fiumicino Airport (FCO)', type: 'airport', description: 'Main international airport, Leonardo da Vinci', distance: '32 km from city center' },
      { name: 'Roma Termini', type: 'train', description: 'Central station with high-speed rail connections to all of Italy', distance: 'City center' },
      { name: 'Roma Tiburtina', type: 'train', description: 'Secondary station for high-speed trains north', distance: '3 km from center' },
      { name: 'Ciampino Airport (CIA)', type: 'airport', description: 'Budget airline hub', distance: '15 km from city center' },
    ],
    mustVisit: [
      { name: 'Colosseum', description: 'Iconic ancient amphitheater where gladiators once battled', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80' },
      { name: 'Vatican City', description: 'St. Peter\'s Basilica and Michelangelo\'s Sistine Chapel', image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80' },
      { name: 'Trevi Fountain', description: 'Baroque masterpiece - toss a coin for good luck', image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80' },
      { name: 'Pantheon', description: 'Best-preserved ancient Roman temple with iconic dome', image: 'https://images.unsplash.com/photo-1548585744-2b77d5c6d2b5?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Cacio e Pepe', description: 'Simple yet perfect pasta with pecorino and black pepper', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80' },
      { name: 'Supplì', description: 'Crispy fried rice balls with mozzarella center', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&q=80' },
      { name: 'Carbonara', description: 'Creamy egg-based pasta with guanciale', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80' },
      { name: 'Maritozzo', description: 'Sweet cream-filled Roman breakfast bun', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Trastevere', type: 'Neighborhood', description: 'Cobblestone streets lined with bars and restaurants', image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80' },
      { name: 'Testaccio', type: 'Club District', description: 'Underground clubs in former slaughterhouse district', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'Campo de\' Fiori', type: 'Piazza', description: 'Lively square with bars and street performers', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80' },
      { name: 'Pigneto', type: 'Hip District', description: 'Trendy area with craft cocktail bars', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Rooftop Bars', type: 'Views', description: 'Aperitivo with panoramic city views', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80' },
    ],
  },
  florence: {
    id: 'florence',
    name: 'Florence',
    country: 'Italy',
    heroImage: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=1600&q=80',
    description: 'The cradle of the Renaissance, where art and beauty reign supreme.',
    longDescription: 'Florence is where the Renaissance was born and where artistic genius flourished under the patronage of the Medici. Every church, every palazzo, every piazza holds treasures that changed the course of Western art. Beyond the museums, Florence enchants with its artisan traditions, from leather workshops to family-run trattorias serving recipes unchanged for generations. The Tuscan hills surrounding the city offer wine-soaked escapes into a landscape that has inspired artists for centuries.',
    transportHubs: [
      { name: 'Florence Airport (FLR)', type: 'airport', description: 'Amerigo Vespucci Airport for European flights', distance: '5 km from city center' },
      { name: 'Firenze Santa Maria Novella', type: 'train', description: 'Main station with high-speed connections', distance: 'City center' },
      { name: 'Firenze Campo di Marte', type: 'train', description: 'Secondary station for regional trains', distance: '2 km from center' },
      { name: 'SITA Bus Station', type: 'bus', description: 'Regional buses to Tuscan towns', distance: 'Near Santa Maria Novella' },
    ],
    mustVisit: [
      { name: 'Uffizi Gallery', description: 'World\'s greatest collection of Renaissance art', image: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80' },
      { name: 'Duomo', description: 'Brunelleschi\'s magnificent dome dominates the skyline', image: 'https://images.unsplash.com/photo-1534801022022-6e701e4a5e99?w=800&q=80' },
      { name: 'Ponte Vecchio', description: 'Medieval bridge lined with goldsmiths\' shops', image: 'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800&q=80' },
      { name: 'Accademia Gallery', description: 'Home to Michelangelo\'s David', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Bistecca alla Fiorentina', description: 'Massive T-bone steak, charred and rare', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
      { name: 'Lampredotto', description: 'Traditional tripe sandwich from street vendors', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80' },
      { name: 'Ribollita', description: 'Hearty Tuscan bread and vegetable soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80' },
      { name: 'Gelato', description: 'Florence claims to have invented it', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Santo Spirito', type: 'Piazza', description: 'Bohemian square with aperitivo scene', image: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80' },
      { name: 'San Niccolò', type: 'Neighborhood', description: 'Local bars away from tourist crowds', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Piazzale Michelangelo', type: 'Views', description: 'Sunset drinks with panoramic views', image: 'https://images.unsplash.com/photo-1543429258-85da2a3f81cb?w=800&q=80' },
      { name: 'Central Market', type: 'Food Hall', description: 'Evening drinks and gourmet bites', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' },
    ],
  },
  venice: {
    id: 'venice',
    name: 'Venice',
    country: 'Italy',
    heroImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1600&q=80',
    description: 'A floating masterpiece of marble palaces and mysterious canals.',
    longDescription: 'Venice is a city that defies logic - a labyrinth of 118 islands connected by 400 bridges, where cars don\'t exist and the streets are made of water. Built by merchants who dominated Mediterranean trade, Venice is adorned with Byzantine, Gothic, and Renaissance treasures. Lose yourself in narrow calli, discover hidden campos, and experience the magic of a city where gondolas glide past palazzos that seem to float on the lagoon.',
    transportHubs: [
      { name: 'Marco Polo Airport (VCE)', type: 'airport', description: 'Main international airport on the mainland', distance: '13 km, water taxi or bus available' },
      { name: 'Venezia Santa Lucia', type: 'train', description: 'Main station at the Grand Canal entrance', distance: 'City entrance' },
      { name: 'Venezia Mestre', type: 'train', description: 'Mainland station with more connections', distance: '10 min to Venice by train' },
      { name: 'Piazzale Roma', type: 'bus', description: 'Bus terminal, last point for wheeled vehicles', distance: 'City entrance' },
    ],
    mustVisit: [
      { name: 'St. Mark\'s Basilica', description: 'Byzantine masterpiece with golden mosaics', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80' },
      { name: 'Doge\'s Palace', description: 'Gothic palace of Venetian rulers with Bridge of Sighs', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80' },
      { name: 'Rialto Bridge', description: 'Iconic stone arch bridge over Grand Canal', image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80' },
      { name: 'Murano Island', description: 'Famous for centuries-old glass-blowing tradition', image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Sarde in Saor', description: 'Sweet and sour sardines with onions and pine nuts', image: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800&q=80' },
      { name: 'Cicchetti', description: 'Venetian tapas - small bites at bacari bars', image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80' },
      { name: 'Risotto al Nero di Seppia', description: 'Black squid ink risotto', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172789a?w=800&q=80' },
      { name: 'Fritelle', description: 'Carnival fritters with raisins and pine nuts', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Bacaro Crawl', type: 'Wine Bars', description: 'Hop between traditional wine bars for ombra', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Campo Santa Margherita', type: 'Piazza', description: 'Student hangout with lively bars', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80' },
      { name: 'Fondamenta della Misericordia', type: 'Canal-side', description: 'Trendy bars along the canal in Cannaregio', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80' },
      { name: 'Harry\'s Bar', type: 'Legendary', description: 'Birthplace of the Bellini cocktail', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80' },
    ],
  },
  amalfi: {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    heroImage: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=1600&q=80',
    description: 'Dramatic cliffs, pastel villages, and Mediterranean perfection.',
    longDescription: 'The Amalfi Coast is where mountains plunge into sapphire seas, creating one of the world\'s most dramatic landscapes. Colorful villages cling to cliffs, connected by a winding road that reveals breathtaking vistas at every turn. The scent of lemon groves fills the air, fresh seafood graces every table, and the Mediterranean lifestyle reaches its most beautiful expression. From glamorous Positano to historic Amalfi to refined Ravello, each town offers its own slice of coastal paradise.',
    transportHubs: [
      { name: 'Naples Airport (NAP)', type: 'airport', description: 'Nearest major airport', distance: '65 km from Amalfi' },
      { name: 'Napoli Centrale', type: 'train', description: 'Main Naples station, then bus to coast', distance: '1.5 hours to Amalfi' },
      { name: 'Salerno Station', type: 'train', description: 'Closer option with ferry connections', distance: '40 km from Amalfi' },
      { name: 'SITA Bus Service', type: 'bus', description: 'Scenic coastal bus route from Sorrento or Salerno', distance: 'Along the coast' },
    ],
    mustVisit: [
      { name: 'Positano', description: 'Iconic vertical village with colorful houses', image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80' },
      { name: 'Ravello', description: 'Hilltop town with stunning Villa Rufolo gardens', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80' },
      { name: 'Path of the Gods', description: 'Legendary coastal hiking trail with dramatic views', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80' },
      { name: 'Amalfi Cathedral', description: '9th-century cathedral with Arab-Norman architecture', image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Limoncello', description: 'Famous lemon liqueur made from local sfusato lemons', image: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=800&q=80' },
      { name: 'Scialatielli ai Frutti di Mare', description: 'Fresh pasta with mixed seafood', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80' },
      { name: 'Delizia al Limone', description: 'Lemon-shaped sponge cake with lemon cream', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80' },
      { name: 'Fresh Catch', description: 'Daily caught fish grilled simply with lemon', image: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Positano Beach Clubs', type: 'Beach', description: 'Evening drinks on Spiaggia Grande', image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80' },
      { name: 'Music on the Rocks', type: 'Club', description: 'Famous seaside nightclub in Positano', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'Ravello Concerts', type: 'Culture', description: 'Summer concerts at Villa Rufolo gardens', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80' },
      { name: 'Amalfi Piazza', type: 'Piazza', description: 'Evening passeggiata and gelato', image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80' },
    ],
  },
  // FRANCE
  paris: {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    description: 'The City of Light, where romance and culture intertwine.',
    longDescription: 'Paris is the city that invented the art of living beautifully. From the iron lacework of the Eiffel Tower to the hushed galleries of the Louvre, from the café terraces of Saint-Germain to the bohemian streets of Montmartre, Paris offers endless discoveries. This is where haute couture meets neighborhood boulangeries, where world-changing art hangs in palatial museums, and where every moment feels touched by magic.',
    transportHubs: [
      { name: 'Charles de Gaulle Airport (CDG)', type: 'airport', description: 'Main international hub', distance: '25 km northeast' },
      { name: 'Gare du Nord', type: 'train', description: 'Eurostar to London, Thalys to Brussels', distance: 'Central Paris' },
      { name: 'Gare de Lyon', type: 'train', description: 'TGV to southern France and Switzerland', distance: 'Central Paris' },
      { name: 'Orly Airport (ORY)', type: 'airport', description: 'Secondary airport for domestic and European flights', distance: '14 km south' },
    ],
    mustVisit: [
      { name: 'Eiffel Tower', description: 'The iconic iron lady of Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80' },
      { name: 'Louvre Museum', description: 'World\'s largest art museum with Mona Lisa', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80' },
      { name: 'Sacré-Cœur', description: 'White basilica crowning Montmartre hill', image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80' },
      { name: 'Notre-Dame', description: 'Gothic masterpiece on Île de la Cité', image: 'https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Croissant', description: 'Buttery, flaky perfection from local boulangeries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80' },
      { name: 'Steak Frites', description: 'Classic bistro steak with crispy fries', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
      { name: 'Crêpes', description: 'Sweet or savory thin pancakes', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80' },
      { name: 'Macarons', description: 'Delicate almond meringue cookies', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Le Marais', type: 'Neighborhood', description: 'Trendy bars and LGBTQ+ friendly scene', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Moulin Rouge', type: 'Cabaret', description: 'World-famous cabaret since 1889', image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80' },
      { name: 'Oberkampf', type: 'Bar Street', description: 'Hip bars and live music venues', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'Seine River Cruises', type: 'Romantic', description: 'Evening cruises past illuminated monuments', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80' },
      { name: 'Jazz Clubs', type: 'Music', description: 'Historic jazz scene in Saint-Germain', image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80' },
    ],
  },
  nice: {
    id: 'nice',
    name: 'Nice',
    country: 'France',
    heroImage: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=1600&q=80',
    description: 'Queen of the French Riviera with endless Mediterranean charm.',
    longDescription: 'Nice is where the Alps meet the Mediterranean, creating a stunning backdrop for this elegant Riviera city. The famous Promenade des Anglais curves along the Baie des Anges, while the old town\'s narrow streets burst with color and Provençal character. Nice offers the perfect blend of beach life, world-class art museums, and proximity to glamorous Monaco and the hilltop villages of Provence.',
    transportHubs: [
      { name: 'Nice Côte d\'Azur Airport (NCE)', type: 'airport', description: 'Third busiest airport in France', distance: '7 km from city center' },
      { name: 'Nice-Ville Station', type: 'train', description: 'Main station with TGV connections', distance: 'City center' },
      { name: 'Nice Riquier', type: 'train', description: 'Secondary station east of center', distance: '1.5 km from center' },
      { name: 'Lignes d\'Azur Bus', type: 'bus', description: 'Regional buses to Riviera towns', distance: 'Various stops' },
    ],
    mustVisit: [
      { name: 'Promenade des Anglais', description: 'Iconic seafront boulevard perfect for strolling', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80' },
      { name: 'Vieux Nice', description: 'Charming old town with baroque architecture', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80' },
      { name: 'Castle Hill', description: 'Panoramic views over the Baie des Anges', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80' },
      { name: 'Matisse Museum', description: 'Dedicated to the master who loved Nice', image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Salade Niçoise', description: 'The authentic version with local ingredients', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
      { name: 'Socca', description: 'Crispy chickpea pancake street food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' },
      { name: 'Pissaladière', description: 'Onion tart with anchovies and olives', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80' },
      { name: 'Pan Bagnat', description: 'Niçoise salad in a bread roll', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Cours Saleya', type: 'Piazza', description: 'Evening dining in the flower market square', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80' },
      { name: 'Port Area', type: 'Bars', description: 'Trendy bars around the old port', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Promenade du Paillon', type: 'Stroll', description: 'Evening walk through the green corridor', image: 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80' },
      { name: 'Casino Ruhl', type: 'Casino', description: 'Classic Riviera gaming experience', image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&q=80' },
    ],
  },
  // GERMANY
  munich: {
    id: 'munich',
    name: 'Munich',
    country: 'Germany',
    heroImage: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1600&q=80',
    description: 'Bavaria\'s vibrant capital where tradition meets cosmopolitan flair.',
    longDescription: 'Munich is Germany at its most charming - a city where lederhosen-clad locals drink steins of beer in centuries-old halls, yet world-class art museums and cutting-edge BMW technology define modernity. The Bavarian capital offers fairy-tale castles within day-trip distance, the Alps as a backdrop, and a warmth of culture that makes every visitor feel welcome. From the Glockenspiel\'s daily performance to the legendary Oktoberfest, Munich celebrates life with gusto.',
    transportHubs: [
      { name: 'Munich Airport (MUC)', type: 'airport', description: 'Major European hub, Franz Josef Strauss', distance: '28 km northeast' },
      { name: 'München Hauptbahnhof', type: 'train', description: 'Central station with ICE high-speed trains', distance: 'City center' },
      { name: 'München Ost', type: 'train', description: 'Eastern station for regional connections', distance: '3 km from center' },
      { name: 'ZOB Bus Station', type: 'bus', description: 'Long-distance FlixBus connections', distance: 'Near Hauptbahnhof' },
    ],
    mustVisit: [
      { name: 'Marienplatz', description: 'Central square with famous Glockenspiel', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80' },
      { name: 'Neuschwanstein Castle', description: 'Fairy-tale castle day trip', image: 'https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=800&q=80' },
      { name: 'English Garden', description: 'One of world\'s largest urban parks', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80' },
      { name: 'Nymphenburg Palace', description: 'Baroque royal summer residence', image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Weisswurst', description: 'Traditional white sausage eaten before noon', image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=800&q=80' },
      { name: 'Schweinshaxe', description: 'Crispy roasted pork knuckle', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
      { name: 'Bretzel', description: 'Soft Bavarian pretzel with butter', image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=800&q=80' },
      { name: 'Obatzda', description: 'Creamy Camembert cheese spread', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Hofbräuhaus', type: 'Beer Hall', description: 'World\'s most famous beer hall since 1589', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80' },
      { name: 'Schwabing', type: 'Neighborhood', description: 'Student area with bars and clubs', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Kultfabrik', type: 'Club District', description: 'Multiple clubs in former factory', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'Beer Gardens', type: 'Outdoor', description: 'Summer evenings under chestnut trees', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80' },
    ],
  },
  berlin: {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    heroImage: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1600&q=80',
    description: 'A city of reinvention, history, and legendary nightlife.',
    longDescription: 'Berlin is a city that has reinvented itself more times than any other European capital. From Prussian grandeur to Cold War division to reunification, Berlin wears its history openly while racing toward the future. Today it\'s a creative powerhouse where world-class museums share streets with underground clubs, where history is confronted honestly, and where a spirit of freedom and experimentation attracts artists, musicians, and dreamers from around the world.',
    transportHubs: [
      { name: 'Berlin Brandenburg Airport (BER)', type: 'airport', description: 'Main international airport', distance: '18 km from city center' },
      { name: 'Berlin Hauptbahnhof', type: 'train', description: 'Modern central station with ICE trains', distance: 'City center' },
      { name: 'Berlin Ostbahnhof', type: 'train', description: 'Eastern station for regional trains', distance: 'East Berlin' },
      { name: 'ZOB Berlin', type: 'bus', description: 'Central bus station for FlixBus', distance: 'Charlottenburg' },
    ],
    mustVisit: [
      { name: 'Brandenburg Gate', description: 'Symbol of German unity and history', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80' },
      { name: 'East Side Gallery', description: 'Longest remaining section of Berlin Wall', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80' },
      { name: 'Museum Island', description: 'UNESCO World Heritage museum complex', image: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=800&q=80' },
      { name: 'Reichstag Building', description: 'Parliament with famous glass dome', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Currywurst', description: 'Iconic Berlin street food with curry ketchup', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80' },
      { name: 'Döner Kebab', description: 'Berlin\'s beloved Turkish import', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80' },
      { name: 'Berliner Pfannkuchen', description: 'Jam-filled doughnut (called Berliner elsewhere)', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80' },
      { name: 'Eisbein', description: 'Traditional pickled pork knuckle', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
    ],
    afterDark: [
      { name: 'Berghain', type: 'Club', description: 'World\'s most famous techno club', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'Kreuzberg', type: 'Neighborhood', description: 'Alternative bars and multicultural scene', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Prenzlauer Berg', type: 'Trendy', description: 'Gentrified area with cocktail bars', image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80' },
      { name: 'Friedrichshain', type: 'Alternative', description: 'RAW compound with clubs and bars', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'Kurfürstendamm', type: 'Upscale', description: 'Elegant bars in West Berlin', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80' },
    ],
  },
  // ENGLAND
  london: {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80',
    description: 'A global capital where history and innovation coexist brilliantly.',
    longDescription: 'London is a city of villages, each with its own character - from the royal grandeur of Westminster to the hipster havens of Shoreditch, from the literary legacy of Bloomsbury to the multicultural energy of Brixton. Two thousand years of history line the Thames, while some of the world\'s best museums offer their treasures for free. London is where Shakespeare still plays, where cutting-edge art challenges conventions, and where a proper cup of tea is never far away.',
    transportHubs: [
      { name: 'Heathrow Airport (LHR)', type: 'airport', description: 'Main international hub, Europe\'s busiest', distance: '24 km west' },
      { name: 'St Pancras International', type: 'train', description: 'Eurostar to Paris and Brussels', distance: 'Central London' },
      { name: 'Victoria Station', type: 'train', description: 'Gatwick Express and southern services', distance: 'Central London' },
      { name: 'Gatwick Airport (LGW)', type: 'airport', description: 'Second London airport', distance: '45 km south' },
    ],
    mustVisit: [
      { name: 'Tower of London', description: 'Royal fortress with Crown Jewels', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80' },
      { name: 'British Museum', description: 'World treasures including Rosetta Stone - free!', image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80' },
      { name: 'Westminster Abbey', description: 'Gothic church of coronations and royal weddings', image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80' },
      { name: 'Buckingham Palace', description: 'The Queen\'s official residence', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80' },
    ],
    localCuisine: [
      { name: 'Fish and Chips', description: 'Battered fish with thick-cut chips', image: 'https://images.unsplash.com/photo-1579208030886-b1a5764c81a2?w=800&q=80' },
      { name: 'Full English Breakfast', description: 'Eggs, bacon, sausage, beans, and more', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80' },
      { name: 'Afternoon Tea', description: 'Scones, sandwiches, and fine tea', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },
      { name: 'Sunday Roast', description: 'Traditional roast beef with Yorkshire pudding', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
    ],
    afterDark: [
      { name: 'West End', type: 'Theatre', description: 'World-class musicals and plays', image: 'https://images.unsplash.com/photo-1563293958-8bfe16b29c16?w=800&q=80' },
      { name: 'Soho', type: 'Bars', description: 'Diverse bars and LGBTQ+ scene', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
      { name: 'Shoreditch', type: 'Hipster', description: 'Street art, clubs, and craft cocktails', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80' },
      { name: 'South Bank', type: 'Cultural', description: 'Evening stroll past illuminated landmarks', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80' },
      { name: 'Historic Pubs', type: 'Traditional', description: 'Centuries-old pubs with real ales', image: 'https://images.unsplash.com/photo-1546726747-421c6d69c929?w=800&q=80' },
    ],
  },
}

// Get city details by ID
export const getCityDetails = (cityId: string): CityDetails | undefined => {
  return cityDetails[cityId.toLowerCase()]
}

// Get all cities for a country
export const getCityDetailsByCountry = (country: string): CityDetails[] => {
  return Object.values(cityDetails).filter(city => {
    if (country === 'England') {
      return city.country === 'United Kingdom'
    }
    return city.country === country
  })
}
