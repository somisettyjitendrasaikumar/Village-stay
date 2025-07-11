import React, { useState, useEffect } from 'react';
import { Star, MapPin, Heart, Grid, List, Sparkles, TrendingUp, Calendar, Users } from 'lucide-react';
import { getAllDestinations, getDestinationsByState, getStates, Destination } from '../data/destinations';
import { aiRecommendationService, RecommendationFilters, AIRecommendation } from '../services/aiRecommendationService';
import { useLanguage } from '../contexts/LanguageContext';
import SmartFilters from '../components/SmartFilters';
import VoiceAssistant from '../components/VoiceAssistant';
import ChatBot from '../components/ChatBot';

interface EnhancedDestinationsPageProps {
  onDestinationSelect: (destination: Destination) => void;
  onBooking: (destination: Destination) => void;
}

const EnhancedDestinationsPage: React.FC<EnhancedDestinationsPageProps> = ({ 
  onDestinationSelect, 
  onBooking 
}) => {
  const { t } = useLanguage();
  const [destinations, setDestinations] = useState<Destination[]>(getAllDestinations());
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);
  const [aiRecommendations, setAIRecommendations] = useState<AIRecommendation[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAIResults, setShowAIResults] = useState(false);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price' | 'rating' | 'reviews'>('featured');

  const handleFiltersChange = (filters: RecommendationFilters) => {
    let filtered = destinations;

    // Apply basic filters
    if (filters.preferredStates && filters.preferredStates.length > 0) {
      filtered = filtered.filter(dest => filters.preferredStates!.includes(dest.state));
    }

    if (filters.budgetCategory) {
      filtered = filtered.filter(dest => dest.budgetCategory === filters.budgetCategory);
    }

    if (filters.difficulty) {
      filtered = filtered.filter(dest => dest.difficulty === filters.difficulty);
    }

    if (filters.interests && filters.interests.length > 0) {
      filtered = filtered.filter(dest => 
        filters.interests!.some(interest => 
          dest.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase())) ||
          dest.idealFor.some(ideal => ideal.toLowerCase().includes(interest.toLowerCase()))
        )
      );
    }

    if (filters.season) {
      filtered = filtered.filter(dest => dest.bestSeason.includes(filters.season!));
    }

    // Group size filter
    filtered = filtered.filter(dest => 
      filters.groupSize >= dest.minGroupSize && filters.groupSize <= dest.maxGroupSize
    );

    // Budget filter (approximate calculation)
    filtered = filtered.filter(dest => {
      const estimatedCost = dest.price * 2; // Rough estimate for 2 days
      return estimatedCost <= filters.budget;
    });

    setFilteredDestinations(filtered);
    setShowAIResults(false);
  };

  const handleAIRecommendations = async (filters: RecommendationFilters) => {
    setIsLoadingAI(true);
    try {
      const recommendations = await aiRecommendationService.getRecommendations(destinations, filters);
      setAIRecommendations(recommendations);
      setShowAIResults(true);
    } catch (error) {
      console.error('AI Recommendations error:', error);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleVoiceQuery = async (query: string) => {
    // Process voice query and convert to filters
    const queryLower = query.toLowerCase();
    let filters: RecommendationFilters = {
      budget: 5000,
      groupSize: 2
    };

    // Extract budget from voice query
    const budgetMatch = query.match(/(\d+)/);
    if (budgetMatch) {
      filters.budget = parseInt(budgetMatch[1]);
    }

    // Extract interests
    const interests = [];
    if (queryLower.includes('adventure')) interests.push('Adventure');
    if (queryLower.includes('culture')) interests.push('Culture');
    if (queryLower.includes('nature')) interests.push('Nature');
    if (queryLower.includes('food')) interests.push('Food');
    if (queryLower.includes('peaceful') || queryLower.includes('peace')) interests.push('Peaceful');

    filters.interests = interests;

    // Extract states
    const states = getStates();
    const mentionedStates = states.filter(state => 
      queryLower.includes(state.toLowerCase())
    );
    if (mentionedStates.length > 0) {
      filters.preferredStates = mentionedStates;
    }

    handleAIRecommendations(filters);
  };

  const sortDestinations = (destinations: Destination[] | AIRecommendation[]) => {
    const isAIRecommendations = destinations.length > 0 && 'matchScore' in destinations[0];
    
    if (isAIRecommendations) {
      return destinations as AIRecommendation[];
    }

    const destList = destinations as Destination[];
    switch (sortBy) {
      case 'price':
        return [...destList].sort((a, b) => a.price - b.price);
      case 'rating':
        return [...destList].sort((a, b) => b.rating - a.rating);
      case 'reviews':
        return [...destList].sort((a, b) => b.reviews - a.reviews);
      default:
        return destList;
    }
  };

  const displayDestinations = showAIResults ? aiRecommendations : filteredDestinations;
  const sortedDestinations = sortDestinations(displayDestinations);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Rural India
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered recommendations for authentic rural experiences across India
          </p>
        </div>

        {/* Smart Filters */}
        <SmartFilters 
          onFiltersChange={handleFiltersChange}
          onAIRecommendations={handleAIRecommendations}
        />

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <p className="text-gray-600">
              {showAIResults ? (
                <span className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>{aiRecommendations.length} AI-powered recommendations</span>
                </span>
              ) : (
                `${filteredDestinations.length} destinations found`
              )}
            </p>
            
            {isLoadingAI && (
              <div className="flex items-center space-x-2 text-purple-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
                <span className="text-sm">AI analyzing...</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              disabled={showAIResults}
            >
              <option value="featured">Featured</option>
              <option value="price">Price: Low to High</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                  viewMode === 'grid'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                  viewMode === 'list'
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Destinations Grid/List */}
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-6'
        }`}>
          {sortedDestinations.map((item, index) => {
            const destination = 'destination' in item ? item.destination : item;
            const isAIRecommendation = 'matchScore' in item;
            const aiRec = isAIRecommendation ? item as AIRecommendation : null;

            return (
              <div
                key={destination.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group relative ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => onDestinationSelect(destination)}
              >
                {/* AI Recommendation Badge */}
                {isAIRecommendation && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Sparkles className="h-3 w-3" />
                    <span>{aiRec!.matchScore}% match</span>
                  </div>
                )}

                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-64 flex-shrink-0' : ''
                }`}>
                  <img
                    src={destination.images[0]}
                    alt={destination.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to favorites functionality
                      }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-md text-sm font-semibold text-emerald-600">
                    ₹{destination.price}/night
                  </div>
                </div>
                
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{destination.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{destination.rating}</span>
                      <span className="text-sm text-gray-500">({destination.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}, {destination.state}</span>
                  </div>

                  {/* Best Season & Group Size */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Best: {destination.bestSeason.slice(0, 3).join(', ')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{destination.minGroupSize}-{destination.maxGroupSize} people</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

                  {/* AI Recommendation Details */}
                  {isAIRecommendation && aiRec && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-xs font-medium text-purple-700 mb-1">Why this matches:</div>
                      <ul className="text-xs text-purple-600 space-y-1">
                        {aiRec.reasons.slice(0, 2).map((reason, idx) => (
                          <li key={idx}>• {reason}</li>
                        ))}
                      </ul>
                      <div className="text-xs text-blue-600 mt-2">
                        <strong>Budget:</strong> ₹{aiRec.budgetBreakdown.total} total
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {destination.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{destination.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="capitalize">{destination.budgetCategory}</span> • {destination.duration}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBooking(destination);
                      }}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {sortedDestinations.length === 0 && !isLoadingAI && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found matching your criteria.</p>
            <button
              onClick={() => {
                setFilteredDestinations(destinations);
                setShowAIResults(false);
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* AI Insights Panel */}
        {showAIResults && aiRecommendations.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Sparkles className="h-6 w-6" />
                <span>AI Travel Insights</span>
              </h2>
              <p className="text-purple-100 mb-6">
                Based on your preferences, here are some personalized insights for your rural India journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    ₹{Math.round(aiRecommendations.reduce((sum, rec) => sum + rec.budgetBreakdown.total, 0) / aiRecommendations.length)}
                  </div>
                  <div className="text-purple-200">Average Budget</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {Math.round(aiRecommendations.reduce((sum, rec) => sum + rec.matchScore, 0) / aiRecommendations.length)}%
                  </div>
                  <div className="text-purple-200">Average Match Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {new Set(aiRecommendations.map(rec => rec.destination.state)).size}
                  </div>
                  <div className="text-purple-200">States Covered</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Voice Assistant */}
      <VoiceAssistant onVoiceQuery={handleVoiceQuery} />

      {/* ChatBot */}
      <ChatBot onDestinationRecommend={(query) => handleVoiceQuery(query)} />
    </div>
  );
};

export default EnhancedDestinationsPage;