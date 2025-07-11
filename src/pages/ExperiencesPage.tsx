import React, { useState } from 'react';
import { Clock, Users, Star, MapPin, Heart, Share2, Filter, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Experience {
  id: string;
  title: string;
  description: string;
  location: string;
  state: string;
  duration: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  price: number;
  rating: number;
  reviews: number;
  maxParticipants: number;
  category: 'cultural' | 'adventure' | 'wellness' | 'culinary';
  images: string[];
  includes: string[];
  highlights: string[];
  host: {
    name: string;
    experience: string;
    rating: number;
  };
  nextAvailable: Date;
  tags: string[];
}

const ExperiencesPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [likedExperiences, setLikedExperiences] = useState<Set<string>>(new Set());

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Traditional Ikat Weaving Workshop',
      description: 'Learn the ancient art of Ikat silk weaving from master artisans in UNESCO recognized Pochampally village. Create your own silk scarf while understanding the cultural significance of this 500-year-old craft.',
      location: 'Pochampally Village',
      state: 'Telangana',
      duration: '4 hours',
      difficulty: 'easy',
      price: 1200,
      rating: 4.8,
      reviews: 89,
      maxParticipants: 8,
      category: 'cultural',
      images: [
        'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      includes: [
        'Expert weaver guidance',
        'All materials and tools',
        'Traditional lunch',
        'Take-home silk scarf',
        'Certificate of completion'
      ],
      highlights: [
        'UNESCO heritage craft learning',
        'Direct interaction with master weavers',
        'Understanding of traditional dyeing process',
        'Cultural storytelling sessions'
      ],
      host: {
        name: 'Pochampally Weavers Cooperative',
        experience: '30+ years',
        rating: 4.9
      },
      nextAvailable: new Date('2024-02-15'),
      tags: ['UNESCO', 'Handloom', 'Traditional Craft', 'Silk']
    },
    {
      id: '2',
      title: 'Coffee Plantation Immersion',
      description: 'Experience the complete journey of coffee from bean to cup in the misty hills of Coorg. Participate in picking, processing, roasting, and brewing while learning about sustainable farming practices.',
      location: 'Coorg Coffee Estates',
      state: 'Karnataka',
      duration: '6 hours',
      difficulty: 'moderate',
      price: 2500,
      rating: 4.9,
      reviews: 156,
      maxParticipants: 12,
      category: 'cultural',
      images: [
        'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      includes: [
        'Plantation tour with expert guide',
        'Coffee picking experience',
        'Processing and roasting workshop',
        'Traditional Kodava lunch',
        '1kg premium coffee beans'
      ],
      highlights: [
        'Learn sustainable farming practices',
        'Traditional Kodava cultural experience',
        'Scenic plantation walks',
        'Professional coffee tasting session'
      ],
      host: {
        name: 'Kodava Plantation Collective',
        experience: '25+ years',
        rating: 4.8
      },
      nextAvailable: new Date('2024-02-18'),
      tags: ['Coffee', 'Sustainable Farming', 'Kodava Culture', 'Plantation']
    },
    {
      id: '3',
      title: 'Tribal Forest Adventure',
      description: 'Embark on a guided forest trek with indigenous tribal communities in Maredumilli. Learn traditional hunting techniques, medicinal plants, and ancient forest wisdom while supporting conservation efforts.',
      location: 'Maredumilli Forest',
      state: 'Andhra Pradesh',
      duration: '8 hours',
      difficulty: 'challenging',
      price: 3200,
      rating: 4.7,
      reviews: 78,
      maxParticipants: 6,
      category: 'adventure',
      images: [
        'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      includes: [
        'Tribal guide and translator',
        'Forest trekking equipment',
        'Traditional tribal lunch',
        'Medicinal plant identification guide',
        'Conservation certificate'
      ],
      highlights: [
        'Ancient tribal wisdom sharing',
        'Rare wildlife spotting opportunities',
        'Traditional hunting technique demonstrations',
        'Medicinal plant knowledge transfer'
      ],
      host: {
        name: 'Venu Tribal Cooperative',
        experience: '25+ years',
        rating: 4.6
      },
      nextAvailable: new Date('2024-02-20'),
      tags: ['Tribal Culture', 'Forest Trek', 'Wildlife', 'Conservation']
    },
    {
      id: '4',
      title: 'Ayurvedic Wellness Retreat',
      description: 'Rejuvenate your mind and body with authentic Ayurvedic treatments in the serene backwaters of Kerala. Learn about traditional healing practices and enjoy personalized wellness consultations.',
      location: 'Kumrakonam Backwaters',
      state: 'Kerala',
      duration: '2 days',
      difficulty: 'easy',
      price: 4500,
      rating: 4.8,
      reviews: 134,
      maxParticipants: 10,
      category: 'wellness',
      images: [
        'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      includes: [
        'Ayurvedic doctor consultation',
        'Traditional massage therapies',
        'Herbal medicine preparation',
        'Yoga and meditation sessions',
        'Organic Ayurvedic meals'
      ],
      highlights: [
        'Personalized wellness assessment',
        'Traditional healing techniques',
        'Peaceful backwater setting',
        'Authentic Ayurvedic cuisine'
      ],
      host: {
        name: 'Backwater Wellness Center',
        experience: '20+ years',
        rating: 4.9
      },
      nextAvailable: new Date('2024-02-22'),
      tags: ['Ayurveda', 'Wellness', 'Backwaters', 'Meditation']
    },
    {
      id: '5',
      title: 'Chettinad Culinary Masterclass',
      description: 'Master the art of Chettinad cuisine with local families in their ancestral mansions. Learn to prepare authentic spicy dishes using traditional techniques and family recipes passed down through generations.',
      location: 'Chettinad Villages',
      state: 'Tamil Nadu',
      duration: '5 hours',
      difficulty: 'moderate',
      price: 1800,
      rating: 4.7,
      reviews: 92,
      maxParticipants: 8,
      category: 'culinary',
      images: [
        'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      includes: [
        'Cooking class with local family',
        'Market tour for fresh ingredients',
        'Traditional cooking utensils',
        'Recipe booklet',
        'Full course meal'
      ],
      highlights: [
        'Family recipe secrets revealed',
        'Traditional spice grinding techniques',
        'Heritage mansion cooking experience',
        'Cultural storytelling during meals'
      ],
      host: {
        name: 'Chettinad Heritage Foundation',
        experience: '18+ years',
        rating: 4.8
      },
      nextAvailable: new Date('2024-02-25'),
      tags: ['Chettinad Cuisine', 'Cooking Class', 'Heritage', 'Spices']
    },
    {
      id: '6',
      title: 'Desert Conservation Safari',
      description: 'Join the Bishnoi community in their wildlife conservation efforts in the Thar Desert. Participate in tree planting, wildlife monitoring, and learn about their 500-year-old environmental philosophy.',
      location: 'Bishnoi Villages',
      state: 'Rajasthan',
      duration: '7 hours',
      difficulty: 'moderate',
      price: 2800,
      rating: 4.6,
      reviews: 67,
      maxParticipants: 10,
      category: 'adventure',
      images: [
        'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      includes: [
        'Bishnoi community guide',
        'Wildlife spotting equipment',
        'Tree planting activity',
        'Traditional Rajasthani lunch',
        'Conservation participation certificate'
      ],
      highlights: [
        'Rare desert wildlife encounters',
        'Ancient conservation philosophy learning',
        'Community-based conservation participation',
        'Desert ecosystem understanding'
      ],
      host: {
        name: 'Bishnoi Community Collective',
        experience: '20+ years',
        rating: 4.5
      },
      nextAvailable: new Date('2024-02-28'),
      tags: ['Wildlife Conservation', 'Desert', 'Bishnoi Culture', 'Eco-tourism']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experiences', count: experiences.length },
    { id: 'cultural', name: t('experiences.cultural'), count: experiences.filter(e => e.category === 'cultural').length },
    { id: 'adventure', name: t('experiences.adventure'), count: experiences.filter(e => e.category === 'adventure').length },
    { id: 'wellness', name: t('experiences.wellness'), count: experiences.filter(e => e.category === 'wellness').length },
    { id: 'culinary', name: t('experiences.culinary'), count: experiences.filter(e => e.category === 'culinary').length }
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      default:
        return 0;
    }
  });

  const handleLike = (experienceId: string) => {
    setLikedExperiences(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(experienceId)) {
        newLiked.delete(experienceId);
      } else {
        newLiked.add(experienceId);
      }
      return newLiked;
    });
  };

  const handleShare = (experienceId: string, title: string) => {
    if (navigator.share) {
      navigator.share({
        title: `VillageStay Experience: ${title}`,
        text: 'Check out this amazing rural experience!',
        url: `${window.location.origin}/experiences/${experienceId}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/experiences/${experienceId}`);
      alert('Link copied to clipboard!');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'moderate': return 'bg-yellow-100 text-yellow-700';
      case 'challenging': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cultural': return 'bg-purple-100 text-purple-700';
      case 'adventure': return 'bg-orange-100 text-orange-700';
      case 'wellness': return 'bg-green-100 text-green-700';
      case 'culinary': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('experiences.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('experiences.description')}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {sortedExperiences.length} experiences found
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedExperiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={experience.images[0]}
                  alt={experience.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => handleLike(experience.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
                      likedExperiences.has(experience.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${likedExperiences.has(experience.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleShare(experience.id, experience.title)}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(experience.category)}`}>
                    {experience.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(experience.difficulty)}`}>
                    {experience.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{experience.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{experience.rating}</span>
                    <span className="text-sm text-gray-500">({experience.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}, {experience.state}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>Max {experience.maxParticipants}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{experience.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">{t('experiences.includes')}:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {experience.includes.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                    {experience.includes.length > 3 && (
                      <li className="text-emerald-600">• +{experience.includes.length - 3} more</li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Award className="h-3 w-3" />
                      <span>{experience.host.name}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      <span>Next: {experience.nextAvailable.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    ₹{experience.price}
                    <span className="text-sm font-normal text-gray-600">/person</span>
                  </div>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium">
                    {t('experiences.book')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No experiences found for the selected category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View all experiences
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Create Your Own Experience</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Are you a local expert with unique skills to share? Join our community of experience hosts and help travelers discover authentic rural India.
          </p>
          <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Become an Experience Host
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;