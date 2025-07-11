export interface StateDestination {
  state: string;
  destinations: Destination[];
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  state: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  activities: string[];
  accommodation: string[];
  bestSeason: string[];
  idealFor: string[];
  budgetCategory: 'budget' | 'mid-range' | 'luxury';
  maxGroupSize: number;
  minGroupSize: number;
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  sustainability: {
    carbonFootprint: string;
    communityImpact: string;
    culturalPreservation: string;
  };
  hostInfo: {
    name: string;
    experience: string;
    languages: string[];
  };
  availability: Date[];
  tags: string[];
  nearbyAttractions: string[];
  localCuisine: string[];
  culturalExperiences: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const destinationsByState: StateDestination[] = [
  {
    state: 'Andhra Pradesh',
    destinations: [
      {
        id: 'ap-1',
        name: 'Araku Valley',
        location: 'Visakhapatnam District',
        state: 'Andhra Pradesh',
        description: 'Experience the mystical beauty of Araku Valley with its coffee plantations, tribal culture, and breathtaking landscapes. Home to indigenous tribes with rich traditions.',
        price: 2500,
        rating: 4.8,
        reviews: 147,
        images: [
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Coffee plantation tours with local farmers',
          'Tribal village visits and cultural interactions',
          'Nature walks through dense forests',
          'Waterfall trekking to Katiki Falls',
          'Traditional craft workshops (bamboo, pottery)',
          'Tribal dance performances in the evening',
          'Organic farming experience',
          'Bird watching in Ananthagiri Hills',
          'Cave exploration at Borra Caves',
          'Traditional cooking classes with tribal families'
        ],
        accommodation: ['Eco-friendly bamboo huts', 'Traditional tribal homes', 'Organic farm stays'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['Nature lovers', 'Culture enthusiasts', 'Adventure seekers', 'Photographers'],
        budgetCategory: 'mid-range',
        maxGroupSize: 8,
        minGroupSize: 2,
        duration: '2-3 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Low impact eco-tourism',
          communityImpact: '85% revenue to local communities',
          culturalPreservation: 'Traditional tribal customs preserved'
        },
        hostInfo: {
          name: 'Ravi Tribal Community',
          experience: '15+ years in sustainable tourism',
          languages: ['Telugu', 'Hindi', 'English']
        },
        availability: [],
        tags: ['tribal culture', 'coffee', 'nature', 'waterfalls', 'eco-tourism'],
        nearbyAttractions: ['Borra Caves', 'Ananthagiri Hills', 'Katiki Falls', 'Padmapuram Gardens'],
        localCuisine: ['Bamboo chicken', 'Tribal rice varieties', 'Forest honey', 'Organic vegetables'],
        culturalExperiences: ['Tribal festivals', 'Traditional music', 'Handicraft making', 'Storytelling sessions'],
        coordinates: { lat: 18.3273, lng: 82.8739 }
      },
      {
        id: 'ap-2',
        name: 'Lambasingi',
        location: 'Chintapalli Mandal',
        state: 'Andhra Pradesh',
        description: 'Discover the Kashmir of Andhra Pradesh with its unique climate, apple orchards, and serene mountain views. Perfect for nature lovers and peace seekers.',
        price: 3200,
        rating: 4.7,
        reviews: 98,
        images: [
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Apple orchard tours and fruit picking',
          'Mountain hiking and trekking trails',
          'Sunrise and sunset viewing points',
          'Local farming experience with organic methods',
          'Nature photography workshops',
          'Campfire evenings with local stories',
          'Village walks and community interactions',
          'Traditional weaving demonstrations',
          'Medicinal plant identification tours',
          'Star gazing sessions in clear mountain air'
        ],
        accommodation: ['Mountain cottages', 'Farmhouse stays', 'Camping sites'],
        bestSeason: ['October', 'November', 'December', 'January', 'February'],
        idealFor: ['Peace seekers', 'Nature photographers', 'Couples', 'Solo travelers'],
        budgetCategory: 'mid-range',
        maxGroupSize: 6,
        minGroupSize: 1,
        duration: '2-4 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Carbon neutral activities',
          communityImpact: '90% revenue to local farmers',
          culturalPreservation: 'Traditional farming methods preserved'
        },
        hostInfo: {
          name: 'Lakshmi Farmers Collective',
          experience: '20+ years in organic farming',
          languages: ['Telugu', 'Hindi', 'English']
        },
        availability: [],
        tags: ['mountains', 'apple orchards', 'cool climate', 'farming', 'peaceful'],
        nearbyAttractions: ['Kothapalli Waterfalls', 'Thajangi Reservoir', 'Galikonda View Point'],
        localCuisine: ['Fresh apples', 'Mountain vegetables', 'Traditional millet dishes', 'Herbal teas'],
        culturalExperiences: ['Farming traditions', 'Mountain folklore', 'Seasonal festivals', 'Community gatherings'],
        coordinates: { lat: 17.9833, lng: 82.6167 }
      },
      {
        id: 'ap-3',
        name: 'Maredumilli',
        location: 'East Godavari District',
        state: 'Andhra Pradesh',
        description: 'Immerse yourself in pristine forests, ancient temples, and traditional tribal lifestyle in this biodiversity hotspot.',
        price: 2800,
        rating: 4.9,
        reviews: 156,
        images: [
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Forest trekking and wildlife spotting',
          'Ancient temple visits and spiritual tours',
          'Bird watching and nature photography',
          'Tribal craft workshops and demonstrations',
          'River rafting in Pampa River',
          'Bamboo house construction experience',
          'Traditional fishing with locals',
          'Medicinal plant walks with tribal healers',
          'Eco-friendly camping in forest clearings',
          'Cultural performances by tribal communities'
        ],
        accommodation: ['Forest lodges', 'Tribal homestays', 'Tree houses'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['Wildlife enthusiasts', 'Adventure seekers', 'Spiritual travelers', 'Eco-tourists'],
        budgetCategory: 'mid-range',
        maxGroupSize: 10,
        minGroupSize: 2,
        duration: '3-4 days',
        difficulty: 'moderate',
        sustainability: {
          carbonFootprint: 'Forest conservation focused',
          communityImpact: '95% revenue to tribal communities',
          culturalPreservation: 'Ancient tribal traditions maintained'
        },
        hostInfo: {
          name: 'Venu Tribal Cooperative',
          experience: '25+ years in forest conservation',
          languages: ['Telugu', 'Gondi', 'Hindi', 'English']
        },
        availability: [],
        tags: ['forests', 'wildlife', 'temples', 'tribal culture', 'adventure'],
        nearbyAttractions: ['Rampa Waterfalls', 'Jalatarangini Waterfalls', 'Amruthavalli Waterfalls'],
        localCuisine: ['Forest vegetables', 'Bamboo shoot curry', 'Wild honey', 'Tribal rice preparations'],
        culturalExperiences: ['Tribal festivals', 'Traditional hunting methods', 'Forest worship rituals', 'Ancestral ceremonies'],
        coordinates: { lat: 17.2833, lng: 81.4667 }
      }
    ]
  },
  {
    state: 'Telangana',
    destinations: [
      {
        id: 'ts-1',
        name: 'Pochampally Village',
        location: 'Yadadri Bhuvanagiri District',
        state: 'Telangana',
        description: 'UNESCO recognized village famous for Ikat silk weaving. Experience the traditional art of tie-dye weaving and interact with master weavers.',
        price: 2200,
        rating: 4.6,
        reviews: 89,
        images: [
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Ikat silk weaving workshops with master artisans',
          'Traditional tie-dye technique learning',
          'Handloom operation demonstrations',
          'Village heritage walks and cultural tours',
          'Weaver family home visits and interactions',
          'Traditional textile dyeing process observation',
          'Silk thread preparation workshops',
          'Local market visits for authentic textiles',
          'Cultural performances by weaver communities',
          'Photography sessions with traditional looms'
        ],
        accommodation: ['Weaver family homestays', 'Heritage village houses', 'Craft center lodges'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['Art enthusiasts', 'Culture lovers', 'Textile designers', 'Craft learners'],
        budgetCategory: 'budget',
        maxGroupSize: 10,
        minGroupSize: 2,
        duration: '1-2 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Traditional craft preservation',
          communityImpact: '95% revenue to weaver families',
          culturalPreservation: 'UNESCO recognized heritage craft'
        },
        hostInfo: {
          name: 'Pochampally Weavers Cooperative',
          experience: '30+ years in traditional weaving',
          languages: ['Telugu', 'Hindi', 'English']
        },
        availability: [],
        tags: ['textiles', 'UNESCO', 'weaving', 'silk', 'traditional crafts'],
        nearbyAttractions: ['Yadagirigutta Temple', 'Bhongir Fort', 'Kolanupaka Jain Temple'],
        localCuisine: ['Traditional Telangana thali', 'Pesarattu', 'Gongura dishes', 'Jaggery sweets'],
        culturalExperiences: ['Weaving traditions', 'Folk songs', 'Traditional festivals', 'Craft exhibitions'],
        coordinates: { lat: 17.2500, lng: 78.9667 }
      },
      {
        id: 'ts-2',
        name: 'Medak Village',
        location: 'Medak District',
        state: 'Telangana',
        description: 'Historic village known for its magnificent fort and traditional pottery. Experience rural life and ancient architectural marvels.',
        price: 1800,
        rating: 4.4,
        reviews: 67,
        images: [
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Medak Fort exploration and history tours',
          'Traditional pottery workshops with local artisans',
          'Village agriculture experience and farming',
          'Bullock cart rides through rural landscapes',
          'Traditional cooking classes with village families',
          'Folk music and dance performances',
          'Heritage architecture photography sessions',
          'Local handicraft making workshops',
          'Rural games and sports participation',
          'Sunset views from ancient fort ramparts'
        ],
        accommodation: ['Village homestays', 'Heritage guesthouses', 'Farm stays'],
        bestSeason: ['November', 'December', 'January', 'February', 'March'],
        idealFor: ['History buffs', 'Architecture lovers', 'Rural experience seekers'],
        budgetCategory: 'budget',
        maxGroupSize: 12,
        minGroupSize: 2,
        duration: '1-2 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Heritage conservation focused',
          communityImpact: '88% revenue to local artisans',
          culturalPreservation: 'Traditional pottery and crafts preserved'
        },
        hostInfo: {
          name: 'Medak Heritage Community',
          experience: '12+ years in heritage tourism',
          languages: ['Telugu', 'Hindi', 'English']
        },
        availability: [],
        tags: ['heritage', 'fort', 'pottery', 'rural life', 'history'],
        nearbyAttractions: ['Medak Cathedral', 'Singur Dam', 'Kondapur Archaeological Site'],
        localCuisine: ['Jowar roti', 'Village-style dal', 'Fresh dairy products', 'Traditional pickles'],
        culturalExperiences: ['Potter community traditions', 'Folk tales', 'Agricultural festivals', 'Traditional games'],
        coordinates: { lat: 18.0500, lng: 78.2667 }
      }
    ]
  },
  {
    state: 'Karnataka',
    destinations: [
      {
        id: 'ka-1',
        name: 'Coorg Coffee Estates',
        location: 'Kodagu District',
        state: 'Karnataka',
        description: 'Immerse yourself in the aromatic world of coffee plantations, misty hills, and Kodava culture in the Scotland of India.',
        price: 3800,
        rating: 4.9,
        reviews: 234,
        images: [
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Coffee plantation tours and bean picking experience',
          'Traditional coffee processing workshops',
          'Kodava cultural experiences and cuisine tasting',
          'Spice plantation walks and harvesting',
          'River rafting in Barapole River',
          'Trekking to Abbey Falls and nature spots',
          'Wildlife spotting in Nagarhole National Park',
          'Traditional Kodava dance performances',
          'Homestay cooking classes with local families',
          'Elephant interaction experiences at camps'
        ],
        accommodation: ['Coffee estate homestays', 'Plantation bungalows', 'Eco-resorts'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
        idealFor: ['Coffee lovers', 'Nature enthusiasts', 'Adventure seekers', 'Culture explorers'],
        budgetCategory: 'luxury',
        maxGroupSize: 8,
        minGroupSize: 2,
        duration: '3-5 days',
        difficulty: 'moderate',
        sustainability: {
          carbonFootprint: 'Organic farming practices',
          communityImpact: '92% revenue to plantation families',
          culturalPreservation: 'Kodava traditions maintained'
        },
        hostInfo: {
          name: 'Kodava Plantation Collective',
          experience: '25+ years in coffee cultivation',
          languages: ['Kodava', 'Kannada', 'Hindi', 'English']
        },
        availability: [],
        tags: ['coffee', 'plantations', 'kodava culture', 'hills', 'adventure'],
        nearbyAttractions: ['Abbey Falls', 'Dubare Elephant Camp', 'Nagarhole National Park', 'Talakaveri'],
        localCuisine: ['Pandi curry', 'Kadambuttu', 'Noolputtu', 'Coorg honey', 'Fresh coffee'],
        culturalExperiences: ['Kodava festivals', 'Traditional martial arts', 'Folk music', 'Ancestral worship'],
        coordinates: { lat: 12.3375, lng: 75.8069 }
      },
      {
        id: 'ka-2',
        name: 'Hampi Village',
        location: 'Vijayanagara District',
        state: 'Karnataka',
        description: 'UNESCO World Heritage site with magnificent ruins, boulder landscapes, and vibrant village life around ancient Vijayanagara Empire.',
        price: 2800,
        rating: 4.8,
        reviews: 189,
        images: [
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'UNESCO heritage site exploration and guided tours',
          'Ancient temple architecture tours with historians',
          'Boulder climbing and unique rock formations',
          'Tungabhadra River coracle rides and boating',
          'Sunrise and sunset viewing at Matanga Hill',
          'Traditional stone carving workshops with artisans',
          'Village cycling tours through ancient ruins',
          'Archaeological site photography expeditions',
          'Local artisan interactions and craft learning',
          'Hampi bazaar heritage walks and shopping'
        ],
        accommodation: ['Heritage guesthouses', 'Village homestays', 'Riverside camps'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['History enthusiasts', 'Photographers', 'Architecture lovers', 'Spiritual seekers'],
        budgetCategory: 'mid-range',
        maxGroupSize: 10,
        minGroupSize: 1,
        duration: '2-4 days',
        difficulty: 'moderate',
        sustainability: {
          carbonFootprint: 'Heritage conservation priority',
          communityImpact: '87% revenue to local communities',
          culturalPreservation: 'UNESCO World Heritage protection'
        },
        hostInfo: {
          name: 'Hampi Heritage Guides',
          experience: '20+ years in heritage tourism',
          languages: ['Kannada', 'Hindi', 'English', 'Tamil']
        },
        availability: [],
        tags: ['UNESCO', 'heritage', 'temples', 'boulders', 'history'],
        nearbyAttractions: ['Virupaksha Temple', 'Vittala Temple', 'Lotus Mahal', 'Elephant Stables'],
        localCuisine: ['South Indian thali', 'Bisi bele bath', 'Mysore pak', 'Filter coffee'],
        culturalExperiences: ['Temple festivals', 'Classical music', 'Stone carving traditions', 'Religious ceremonies'],
        coordinates: { lat: 15.3350, lng: 76.4600 }
      }
    ]
  },
  {
    state: 'Tamil Nadu',
    destinations: [
      {
        id: 'tn-1',
        name: 'Chettinad Villages',
        location: 'Sivaganga District',
        state: 'Tamil Nadu',
        description: 'Explore the magnificent mansions, unique architecture, and world-famous cuisine of the Chettiar community in these heritage villages.',
        price: 3200,
        rating: 4.7,
        reviews: 156,
        images: [
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Chettinad mansion architecture tours and exploration',
          'Traditional cooking classes with Chettiar families',
          'Antique and artifact collection visits',
          'Local tile and pottery workshops',
          'Heritage village walks and cultural immersion',
          'Traditional music and dance performances',
          'Spice market visits and culinary tours',
          'Handloom weaving demonstrations',
          'Photography of unique architectural details',
          'Cultural storytelling sessions with elders'
        ],
        accommodation: ['Heritage mansions', 'Traditional Chettinad homes', 'Boutique heritage hotels'],
        bestSeason: ['November', 'December', 'January', 'February', 'March'],
        idealFor: ['Food enthusiasts', 'Architecture lovers', 'Culture seekers', 'Heritage tourists'],
        budgetCategory: 'luxury',
        maxGroupSize: 8,
        minGroupSize: 2,
        duration: '2-3 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Heritage building conservation',
          communityImpact: '90% revenue to Chettiar families',
          culturalPreservation: 'Traditional architecture and cuisine preserved'
        },
        hostInfo: {
          name: 'Chettinad Heritage Foundation',
          experience: '18+ years in heritage hospitality',
          languages: ['Tamil', 'Hindi', 'English']
        },
        availability: [],
        tags: ['heritage', 'architecture', 'cuisine', 'mansions', 'culture'],
        nearbyAttractions: ['Athangudi Palace', 'Kundrakudi Murugan Temple', 'Pillaiyarpatti Temple'],
        localCuisine: ['Chettinad chicken', 'Kara kuzhambu', 'Paniyaram', 'Filter coffee', 'Traditional sweets'],
        culturalExperiences: ['Chettiar traditions', 'Classical music', 'Traditional festivals', 'Ancestral customs'],
        coordinates: { lat: 9.8500, lng: 78.6000 }
      },
      {
        id: 'tn-2',
        name: 'Thanjavur Villages',
        location: 'Thanjavur District',
        state: 'Tamil Nadu',
        description: 'Experience the rich cultural heritage of the Chola dynasty, traditional arts, and rural Tamil life in the rice bowl of Tamil Nadu.',
        price: 2600,
        rating: 4.6,
        reviews: 134,
        images: [
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Thanjavur painting workshops with master artists',
          'Traditional bronze casting demonstrations',
          'Bharatanatyam dance performances and classes',
          'Rice farming and harvesting experience',
          'Temple architecture and sculpture tours',
          'Classical music concerts and learning sessions',
          'Traditional weaving workshops',
          'Village pottery making sessions',
          'Bullock cart rides through paddy fields',
          'Cultural heritage walks and storytelling'
        ],
        accommodation: ['Traditional Tamil homes', 'Heritage guesthouses', 'Farm stays'],
        bestSeason: ['November', 'December', 'January', 'February', 'March'],
        idealFor: ['Art lovers', 'Culture enthusiasts', 'Classical arts students', 'Heritage seekers'],
        budgetCategory: 'mid-range',
        maxGroupSize: 10,
        minGroupSize: 2,
        duration: '2-4 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Traditional arts preservation',
          communityImpact: '88% revenue to artist communities',
          culturalPreservation: 'Chola dynasty heritage maintained'
        },
        hostInfo: {
          name: 'Thanjavur Arts Collective',
          experience: '22+ years in traditional arts',
          languages: ['Tamil', 'Hindi', 'English']
        },
        availability: [],
        tags: ['arts', 'temples', 'classical music', 'dance', 'heritage'],
        nearbyAttractions: ['Brihadeeswarar Temple', 'Thanjavur Palace', 'Saraswathi Mahal Library'],
        localCuisine: ['Traditional Tamil meals', 'Curd rice', 'Sambar', 'Rasam', 'Payasam'],
        culturalExperiences: ['Temple festivals', 'Classical performances', 'Traditional crafts', 'Religious ceremonies'],
        coordinates: { lat: 10.7870, lng: 79.1378 }
      }
    ]
  },
  {
    state: 'Kerala',
    destinations: [
      {
        id: 'kl-1',
        name: 'Kumrakonam Backwaters',
        location: 'Kottayam District',
        state: 'Kerala',
        description: 'Experience authentic backwater life, traditional houseboats, and coconut farming in this pristine network of canals and lagoons.',
        price: 4200,
        rating: 4.8,
        reviews: 198,
        images: [
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Traditional houseboat stays and backwater cruises',
          'Coconut farming and toddy tapping experience',
          'Backwater fishing with local fishermen',
          'Coir making workshops and demonstrations',
          'Traditional Kerala cooking classes',
          'Kathakali and Mohiniyattam performances',
          'Village canoe rides through narrow canals',
          'Ayurvedic massage and wellness treatments',
          'Bird watching in backwater ecosystems',
          'Sunset photography from traditional houseboats'
        ],
        accommodation: ['Traditional houseboats', 'Backwater homestays', 'Eco-resorts'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['Nature lovers', 'Peace seekers', 'Couples', 'Photography enthusiasts'],
        budgetCategory: 'luxury',
        maxGroupSize: 6,
        minGroupSize: 2,
        duration: '2-4 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Eco-friendly water transport',
          communityImpact: '91% revenue to fishing communities',
          culturalPreservation: 'Traditional backwater lifestyle preserved'
        },
        hostInfo: {
          name: 'Backwater Community Collective',
          experience: '28+ years in backwater tourism',
          languages: ['Malayalam', 'Hindi', 'English', 'Tamil']
        },
        availability: [],
        tags: ['backwaters', 'houseboats', 'coconuts', 'fishing', 'peaceful'],
        nearbyAttractions: ['Vembanad Lake', 'Kumarakom Bird Sanctuary', 'Pathiramanal Island'],
        localCuisine: ['Fish curry', 'Appam', 'Puttu', 'Coconut-based dishes', 'Toddy'],
        culturalExperiences: ['Boat races', 'Traditional festivals', 'Folk performances', 'Fishing traditions'],
        coordinates: { lat: 9.6186, lng: 76.3947 }
      },
      {
        id: 'kl-2',
        name: 'Wayanad Tribal Villages',
        location: 'Wayanad District',
        state: 'Kerala',
        description: 'Discover the rich tribal heritage, spice plantations, and pristine forests of Wayanad with indigenous communities.',
        price: 3600,
        rating: 4.7,
        reviews: 167,
        images: [
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Tribal village visits and cultural interactions',
          'Spice plantation tours and harvesting experience',
          'Traditional tribal craft workshops',
          'Forest trekking and wildlife spotting',
          'Bamboo rafting in mountain streams',
          'Traditional tribal dance performances',
          'Medicinal plant identification walks',
          'Organic farming experience with tribes',
          'Cave exploration and ancient rock art viewing',
          'Tribal storytelling sessions around campfires'
        ],
        accommodation: ['Tribal community homestays', 'Eco-lodges', 'Tree houses'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['Adventure seekers', 'Culture enthusiasts', 'Nature lovers', 'Eco-tourists'],
        budgetCategory: 'mid-range',
        maxGroupSize: 8,
        minGroupSize: 2,
        duration: '3-5 days',
        difficulty: 'moderate',
        sustainability: {
          carbonFootprint: 'Forest conservation focused',
          communityImpact: '94% revenue to tribal communities',
          culturalPreservation: 'Indigenous tribal traditions protected'
        },
        hostInfo: {
          name: 'Wayanad Tribal Welfare Society',
          experience: '15+ years in tribal tourism',
          languages: ['Malayalam', 'Tribal dialects', 'Hindi', 'English']
        },
        availability: [],
        tags: ['tribal culture', 'spices', 'forests', 'adventure', 'indigenous'],
        nearbyAttractions: ['Edakkal Caves', 'Soochipara Falls', 'Banasura Sagar Dam', 'Chembra Peak'],
        localCuisine: ['Tribal rice varieties', 'Forest vegetables', 'Spiced meats', 'Herbal teas', 'Wild honey'],
        culturalExperiences: ['Tribal festivals', 'Traditional hunting methods', 'Folk medicine', 'Ancestral rituals'],
        coordinates: { lat: 11.6854, lng: 76.1320 }
      }
    ]
  },
  {
    state: 'Rajasthan',
    destinations: [
      {
        id: 'rj-1',
        name: 'Bishnoi Villages',
        location: 'Jodhpur District',
        state: 'Rajasthan',
        description: 'Experience the eco-friendly lifestyle of Bishnoi community, known for their wildlife conservation and sustainable living practices.',
        price: 2900,
        rating: 4.5,
        reviews: 112,
        images: [
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Wildlife conservation tours with Bishnoi guides',
          'Traditional handicraft workshops',
          'Desert safari and camel rides',
          'Folk music and dance performances',
          'Traditional cooking classes',
          'Village walks and cultural interactions',
          'Pottery and weaving demonstrations',
          'Organic farming experience',
          'Sunset photography in desert landscapes',
          'Storytelling sessions about Bishnoi traditions'
        ],
        accommodation: ['Traditional mud houses', 'Desert camps', 'Village homestays'],
        bestSeason: ['October', 'November', 'December', 'January', 'February', 'March'],
        idealFor: ['Wildlife enthusiasts', 'Culture lovers', 'Eco-tourists', 'Photography enthusiasts'],
        budgetCategory: 'mid-range',
        maxGroupSize: 10,
        minGroupSize: 2,
        duration: '2-3 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Zero-waste community practices',
          communityImpact: '92% revenue to Bishnoi families',
          culturalPreservation: '500-year-old conservation traditions'
        },
        hostInfo: {
          name: 'Bishnoi Community Collective',
          experience: '20+ years in eco-tourism',
          languages: ['Rajasthani', 'Hindi', 'English']
        },
        availability: [],
        tags: ['wildlife conservation', 'desert', 'eco-tourism', 'traditional crafts', 'sustainable living'],
        nearbyAttractions: ['Guda Bishnoi Lake', 'Khejarli Village', 'Rohet Garh'],
        localCuisine: ['Dal baati churma', 'Ker sangri', 'Bajra roti', 'Desert honey', 'Traditional sweets'],
        culturalExperiences: ['Bishnoi festivals', 'Wildlife protection rituals', 'Folk traditions', 'Community gatherings'],
        coordinates: { lat: 26.2389, lng: 73.0243 }
      }
    ]
  },
  {
    state: 'Gujarat',
    destinations: [
      {
        id: 'gj-1',
        name: 'Kutch Villages',
        location: 'Kutch District',
        state: 'Gujarat',
        description: 'Explore the vibrant handicrafts, salt deserts, and rich cultural heritage of Kutch region with traditional artisan communities.',
        price: 3100,
        rating: 4.6,
        reviews: 143,
        images: [
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        activities: [
          'Traditional handicraft workshops with master artisans',
          'White Rann desert exploration and photography',
          'Embroidery and mirror work learning sessions',
          'Salt farming experience and tours',
          'Folk music and dance performances',
          'Artisan village visits and cultural immersion',
          'Traditional block printing workshops',
          'Camel safari in desert landscapes',
          'Local market visits for authentic crafts',
          'Sunset viewing at Great Rann of Kutch'
        ],
        accommodation: ['Traditional bhungas (mud houses)', 'Desert resorts', 'Artisan homestays'],
        bestSeason: ['November', 'December', 'January', 'February', 'March'],
        idealFor: ['Craft enthusiasts', 'Desert lovers', 'Culture seekers', 'Photography enthusiasts'],
        budgetCategory: 'mid-range',
        maxGroupSize: 12,
        minGroupSize: 2,
        duration: '3-4 days',
        difficulty: 'easy',
        sustainability: {
          carbonFootprint: 'Traditional craft preservation',
          communityImpact: '89% revenue to artisan families',
          culturalPreservation: 'Ancient handicraft traditions maintained'
        },
        hostInfo: {
          name: 'Kutch Artisan Collective',
          experience: '25+ years in handicraft tourism',
          languages: ['Gujarati', 'Kutchi', 'Hindi', 'English']
        },
        availability: [],
        tags: ['handicrafts', 'desert', 'embroidery', 'salt farming', 'traditional arts'],
        nearbyAttractions: ['Great Rann of Kutch', 'Kala Dungar', 'Mandvi Beach', 'Bhuj Palace'],
        localCuisine: ['Kutchi dabeli', 'Khaman dhokla', 'Gujarati thali', 'Traditional sweets', 'Buttermilk'],
        culturalExperiences: ['Rann Utsav', 'Traditional crafts', 'Folk performances', 'Artisan traditions'],
        coordinates: { lat: 23.7337, lng: 69.8597 }
      }
    ]
  }
];

export const getAllDestinations = (): Destination[] => {
  return destinationsByState.flatMap(state => state.destinations);
};

export const getDestinationsByState = (stateName: string): Destination[] => {
  const state = destinationsByState.find(s => s.state === stateName);
  return state ? state.destinations : [];
};

export const getStates = (): string[] => {
  return destinationsByState.map(state => state.state);
};