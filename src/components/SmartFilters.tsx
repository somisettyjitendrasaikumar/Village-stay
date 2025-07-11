import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, Users, DollarSign, Sparkles } from 'lucide-react';
import { getStates } from '../data/destinations';
import { aiRecommendationService, RecommendationFilters } from '../services/aiRecommendationService';

interface SmartFiltersProps {
  onFiltersChange: (filters: RecommendationFilters) => void;
  onAIRecommendations: (filters: RecommendationFilters) => void;
}

const SmartFilters: React.FC<SmartFiltersProps> = ({ onFiltersChange, onAIRecommendations }) => {
  const [filters, setFilters] = useState<RecommendationFilters>({
    budget: 5000,
    groupSize: 2,
    preferredStates: [],
    season: '',
    interests: [],
    duration: '2-3 days',
    difficulty: '',
    budgetCategory: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const states = getStates();
  const seasons = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const interests = [
    'Adventure', 'Culture', 'Nature', 'Food', 'Photography', 'Spirituality',
    'Art & Crafts', 'Wildlife', 'Trekking', 'Peaceful', 'Heritage', 'Festivals'
  ];

  const durations = ['1-2 days', '2-3 days', '3-5 days', '5-7 days', '1+ weeks'];
  const difficulties = ['easy', 'moderate', 'challenging'];
  const budgetCategories = ['budget', 'mid-range', 'luxury'];

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  useEffect(() => {
    const getSuggestions = async () => {
      if (searchTerm.length > 2) {
        const suggestions = await aiRecommendationService.getSmartSuggestions(searchTerm);
        setSuggestions(suggestions);
      } else {
        setSuggestions([]);
      }
    };

    const debounceTimer = setTimeout(getSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleFilterChange = (key: keyof RecommendationFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleArrayFilterToggle = (key: keyof RecommendationFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(value)
        ? (prev[key] as string[]).filter(item => item !== value)
        : [...(prev[key] as string[]), value]
    }));
  };

  const handleAIRecommendations = () => {
    onAIRecommendations(filters);
  };

  const resetFilters = () => {
    setFilters({
      budget: 5000,
      groupSize: 2,
      preferredStates: [],
      season: '',
      interests: [],
      duration: '2-3 days',
      difficulty: '',
      budgetCategory: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Search destinations, activities, or ask for recommendations..."
          />
        </div>
        
        {/* Smart Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-2 bg-gray-50 rounded-md p-2">
            <p className="text-xs text-gray-600 mb-2">AI Suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(suggestion)}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Basic Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="inline h-4 w-4 mr-1" />
            Budget per person: ₹{filters.budget}
          </label>
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={filters.budget}
            onChange={(e) => handleFilterChange('budget', parseInt(e.target.value))}
            className="w-full accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹1K</span>
            <span>₹10K</span>
          </div>
        </div>

        {/* Group Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="inline h-4 w-4 mr-1" />
            Group Size
          </label>
          <select
            value={filters.groupSize}
            onChange={(e) => handleFilterChange('groupSize', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(size => (
              <option key={size} value={size}>{size} {size === 1 ? 'person' : 'people'}</option>
            ))}
          </select>
        </div>

        {/* Season */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline h-4 w-4 mr-1" />
            Preferred Season
          </label>
          <select
            value={filters.season}
            onChange={(e) => handleFilterChange('season', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Any season</option>
            {seasons.map(season => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>
          <select
            value={filters.duration}
            onChange={(e) => handleFilterChange('duration', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          >
            {durations.map(duration => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium"
        >
          <Filter className="h-4 w-4" />
          <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Filters</span>
        </button>

        <div className="flex space-x-2">
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Reset
          </button>
          <button
            onClick={handleAIRecommendations}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors font-medium"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Recommendations</span>
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="space-y-4 pt-4 border-t border-gray-200">
          {/* States */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Preferred States
            </label>
            <div className="flex flex-wrap gap-2">
              {states.map(state => (
                <button
                  key={state}
                  onClick={() => handleArrayFilterToggle('preferredStates', state)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.preferredStates?.includes(state)
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interests & Activities
            </label>
            <div className="flex flex-wrap gap-2">
              {interests.map(interest => (
                <button
                  key={interest}
                  onClick={() => handleArrayFilterToggle('interests', interest)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.interests?.includes(interest)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty & Budget Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="flex space-x-2">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty}
                    onClick={() => handleFilterChange('difficulty', 
                      filters.difficulty === difficulty ? '' : difficulty
                    )}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                      filters.difficulty === difficulty
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Category
              </label>
              <div className="flex space-x-2">
                {budgetCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange('budgetCategory', 
                      filters.budgetCategory === category ? '' : category
                    )}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                      filters.budgetCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartFilters;