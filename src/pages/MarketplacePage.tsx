import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, ShoppingCart, Heart, User, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  artisan: {
    name: string;
    village: string;
    experience: string;
  };
  inStock: boolean;
  handmade: boolean;
  culturalSignificance: string;
}

const MarketplacePage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: t('marketplace.all') || 'All Items', icon: Package },
    { id: 'handcrafts', name: t('marketplace.handcrafts'), icon: Package },
    { id: 'textiles', name: t('marketplace.textiles'), icon: Package },
    { id: 'pottery', name: t('marketplace.pottery'), icon: Package },
    { id: 'jewelry', name: t('marketplace.jewelry'), icon: Package },
    { id: 'food', name: t('marketplace.food'), icon: Package },
    { id: 'art', name: t('marketplace.art'), icon: Package },
  ];

  const marketplaceItems: MarketplaceItem[] = [
    {
      id: '1',
      name: 'Handwoven Pochampally Silk Saree',
      description: 'Traditional Ikat silk saree with geometric patterns, handwoven by master weavers',
      price: 8500,
      originalPrice: 12000,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      category: 'textiles',
      artisan: {
        name: 'Lakshmi Devi',
        village: 'Pochampally, Telangana',
        experience: '25+ years in silk weaving'
      },
      inStock: true,
      handmade: true,
      culturalSignificance: 'UNESCO recognized traditional craft representing Telangana heritage'
    },
    {
      id: '2',
      name: 'Araku Coffee - Organic Blend',
      description: 'Premium organic coffee beans grown by tribal farmers in Araku Valley',
      price: 450,
      originalPrice: 600,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      category: 'food',
      artisan: {
        name: 'Ravi Tribal Collective',
        village: 'Araku Valley, Andhra Pradesh',
        experience: '15+ years in organic farming'
      },
      inStock: true,
      handmade: true,
      culturalSignificance: 'Grown using traditional tribal farming methods'
    },
    {
      id: '3',
      name: 'Kondapalli Wooden Toys',
      description: 'Traditional wooden toys carved from soft Tella Poniki wood',
      price: 1200,
      originalPrice: 1800,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      category: 'handcrafts',
      artisan: {
        name: 'Venkata Rao',
        village: 'Kondapalli, Andhra Pradesh',
        experience: '30+ years in toy making'
      },
      inStock: true,
      handmade: true,
      culturalSignificance: '400-year-old traditional craft form'
    },
    {
      id: '4',
      name: 'Nirmal Paintings',
      description: 'Traditional paintings on wood with natural colors and gold leaf work',
      price: 3500,
      originalPrice: 5000,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      category: 'art',
      artisan: {
        name: 'Srinivas Master',
        village: 'Nirmal, Telangana',
        experience: '20+ years in traditional painting'
      },
      inStock: true,
      handmade: true,
      culturalSignificance: 'Mughal-era art form with Persian influence'
    },
    {
      id: '5',
      name: 'Bidriware Silver Inlay Vase',
      description: 'Traditional metal handicraft with intricate silver inlay work',
      price: 4500,
      originalPrice: 6500,
      rating: 4.8,
      reviews: 45,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      category: 'handcrafts',
      artisan: {
        name: 'Mohammed Ali',
        village: 'Bidar, Karnataka',
        experience: '18+ years in Bidriware'
      },
      inStock: true,
      handmade: true,
      culturalSignificance: '14th-century Persian-influenced craft'
    },
    {
      id: '6',
      name: 'Kalamkari Hand-painted Dupatta',
      description: 'Hand-painted textile with natural dyes depicting mythological stories',
      price: 2800,
      originalPrice: 4000,
      rating: 4.6,
      reviews: 123,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      category: 'textiles',
      artisan: {
        name: 'Padma Reddy',
        village: 'Srikalahasti, Andhra Pradesh',
        experience: '22+ years in Kalamkari'
      },
      inStock: true,
      handmade: true,
      culturalSignificance: 'Ancient art form mentioned in Mahabharata'
    }
  ];

  const filteredItems = marketplaceItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.artisan.village.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('marketplace.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('marketplace.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Search handcrafts, artisans, or villages..."
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {filteredItems.length} items found
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Featured</span>
          </div>
        </div>

        {/* Marketplace Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  {item.handmade && (
                    <div className="bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      Handmade
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-md">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-bold text-emerald-600">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                    <span className="text-sm text-gray-500">({item.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{item.artisan.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.artisan.village}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.artisan.experience}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-blue-800 font-medium">Cultural Significance:</p>
                  <p className="text-xs text-blue-700">{item.culturalSignificance}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className={`text-sm font-medium ${
                    item.inStock ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      disabled={!item.inStock}
                      className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>{t('marketplace.add_to_cart')}</span>
                    </button>
                    <button
                      disabled={!item.inStock}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t('marketplace.buy_now')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Impact Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Purchase Makes a Difference</h2>
            <p className="text-emerald-100 mb-6">
              Every purchase directly supports rural artisans and helps preserve traditional crafts for future generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-emerald-200">Goes to Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10%</div>
                <div className="text-emerald-200">Community Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5%</div>
                <div className="text-emerald-200">Platform Maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;