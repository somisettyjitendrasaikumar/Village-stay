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
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'
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
        culturalExperiences: ['Tribal festivals', 'Traditional music', 'Handicraft making', 'Storytelling sessions']
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
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg'
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
        culturalExperiences: ['Farming traditions', 'Mountain folklore', 'Seasonal festivals', 'Community gatherings']
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
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg'
        ],
        activities: [
          'Ikat silk weaving workshops with master artisans',
          'Traditional tie-dye technique learning',
          'Handloom operation demonstrations',
          'Village heritage walks',
          'Weaver family home visits',
          'Traditional textile dyeing process',
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
        culturalExperiences: ['Weaving traditions', 'Folk songs', 'Traditional festivals', 'Craft exhibitions']
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
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'
        ],
        activities: [
          'Medak Fort exploration and history tours',
          'Traditional pottery workshops',
          'Village agriculture experience',
          'Bullock cart rides through fields',
          'Traditional cooking classes',
          'Folk music and dance performances',
          'Heritage architecture photography',
          'Local handicraft making sessions',
          'Rural games and sports participation',
          'Sunset views from fort ramparts'
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
        culturalExperiences: ['Potter community traditions', 'Folk tales', 'Agricultural festivals', 'Traditional games']
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
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg'
        ],
        activities: [
          'Coffee plantation tours and bean picking',
          'Traditional coffee processing workshops',
          'Kodava cultural experiences and cuisine',
          'Spice plantation walks',
          'River rafting in Barapole River',
          'Trekking to Abbey Falls',
          'Wildlife spotting in Nagarhole',
          'Traditional Kodava dance performances',
          'Homestay cooking classes',
          'Elephant interaction experiences'
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
        culturalExperiences: ['Kodava festivals', 'Traditional martial arts', 'Folk music', 'Ancestral worship']
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
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg'
        ],
        activities: [
          'UNESCO heritage site exploration',
          'Ancient temple architecture tours',
          'Boulder climbing and rock formations',
          'Tungabhadra River coracle rides',
          'Sunrise/sunset at Matanga Hill',
          'Traditional stone carving workshops',
          'Village cycling tours',
          'Archaeological site photography',
          'Local artisan interactions',
          'Hampi bazaar heritage walks'
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
        culturalExperiences: ['Temple festivals', 'Classical music', 'Stone carving traditions', 'Religious ceremonies']
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
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg'
        ],
        activities: [
          'Chettinad mansion architecture tours',
          'Traditional cooking classes with Chettiar families',
          'Antique and artifact collection visits',
          'Local tile and pottery workshops',
          'Heritage village walks',
          'Traditional music and dance performances',
          'Spice market visits and tours',
          'Handloom weaving demonstrations',
          'Photography of unique architectural details',
          'Cultural storytelling sessions'
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
        culturalExperiences: ['Chettiar traditions', 'Classical music', 'Traditional festivals', 'Ancestral customs']
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
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg'
        ],
        activities: [
          'Thanjavur painting workshops',
          'Traditional bronze casting demonstrations',
          'Bharatanatyam dance performances',
          'Rice farming and harvesting experience',
          'Temple architecture and sculpture tours',
          'Classical music concerts',
          'Traditional weaving workshops',
          'Village pottery making sessions',
          'Bullock cart rides through paddy fields',
          'Cultural heritage walks'
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
        culturalExperiences: ['Temple festivals', 'Classical performances', 'Traditional crafts', 'Religious ceremonies']
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
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
          'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'
        ],
        activities: [
          'Traditional houseboat stays and cruises',
          'Coconut farming and toddy tapping experience',
          'Backwater fishing with local fishermen',
          'Coir making workshops',
          'Traditional Kerala cooking classes',
          'Kathakali and Mohiniyattam performances',
          'Village canoe rides through narrow canals',
          'Ayurvedic massage and treatments',
          'Bird watching in backwater ecosystems',
          'Sunset photography from houseboats'
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
        culturalExperiences: ['Boat races', 'Traditional festivals', 'Folk performances', 'Fishing traditions']
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
          'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
          'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg'
        ],
        activities: [
          'Tribal village visits and cultural interactions',
          'Spice plantation tours and harvesting',
          'Traditional tribal craft workshops',
          'Forest trekking and wildlife spotting',
          'Bamboo rafting in streams',
          'Traditional tribal dance performances',
          'Medicinal plant identification walks',
          'Organic farming experience',
          'Cave exploration and rock art viewing',
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
        culturalExperiences: ['Tribal festivals', 'Traditional hunting methods', 'Folk medicine', 'Ancestral rituals']
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