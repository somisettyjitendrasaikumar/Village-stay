import React, { useState } from 'react';
import { MapPin, Camera, Star, ArrowLeft, Plus, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NewPlace {
  name: string;
  location: string;
  state: string;
  description: string;
  category: string;
  activities: string[];
  bestSeason: string[];
  estimatedPrice: number;
  difficulty: string;
  images: File[];
  coordinates: {
    lat: number;
    lng: number;
  };
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
}

const AddPlacePage: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [newPlace, setNewPlace] = useState<NewPlace>({
    name: '',
    location: '',
    state: '',
    description: '',
    category: '',
    activities: [],
    bestSeason: [],
    estimatedPrice: 0,
    difficulty: 'easy',
    images: [],
    coordinates: { lat: 0, lng: 0 },
    contactInfo: {
      name: '',
      phone: '',
      email: ''
    }
  });

  const [newActivity, setNewActivity] = useState('');

  const states = [
    'Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Kerala',
    'Rajasthan', 'Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Uttar Pradesh'
  ];

  const categories = [
    'Cultural Heritage', 'Adventure Tourism', 'Eco Tourism', 'Wellness Tourism',
    'Culinary Tourism', 'Tribal Tourism', 'Agricultural Tourism', 'Craft Tourism'
  ];

  const seasons = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const difficulties = ['easy', 'moderate', 'challenging'];

  const steps = [
    { number: 1, title: 'Basic Information' },
    { number: 2, title: 'Activities & Features' },
    { number: 3, title: 'Images & Contact' },
    { number: 4, title: 'Review & Submit' }
  ];

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setNewPlace(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof NewPlace],
          [child]: value
        }
      }));
    } else {
      setNewPlace(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleArrayToggle = (field: string, value: string) => {
    setNewPlace(prev => ({
      ...prev,
      [field]: (prev[field as keyof NewPlace] as string[]).includes(value)
        ? (prev[field as keyof NewPlace] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof NewPlace] as string[]), value]
    }));
  };

  const addActivity = () => {
    if (newActivity.trim() && !newPlace.activities.includes(newActivity.trim())) {
      setNewPlace(prev => ({
        ...prev,
        activities: [...prev.activities, newActivity.trim()]
      }));
      setNewActivity('');
    }
  };

  const removeActivity = (activity: string) => {
    setNewPlace(prev => ({
      ...prev,
      activities: prev.activities.filter(a => a !== activity)
    }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (files) {
      const newImages = Array.from(files).slice(0, 5 - newPlace.images.length);
      setNewPlace(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    setNewPlace(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the new place
      console.log('Submitting new place:', newPlace);
      alert('Thank you for suggesting a new place! We will review it and add it to our platform soon.');
      // Reset form or redirect
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return newPlace.name && newPlace.location && newPlace.state && newPlace.description && newPlace.category;
      case 2:
        return newPlace.activities.length > 0 && newPlace.bestSeason.length > 0 && newPlace.estimatedPrice > 0;
      case 3:
        return newPlace.images.length > 0 && newPlace.contactInfo.name && newPlace.contactInfo.phone;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{t('common.add_place')}</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-emerald-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {step.number < steps.length && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newPlace.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter the name of the place"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={newPlace.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="District/City"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    required
                    value={newPlace.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={newPlace.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  value={newPlace.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe the place, its cultural significance, and what makes it special..."
                />
              </div>
            </div>
          )}

          {/* Step 2: Activities & Features */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Activities & Features</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Activities & Experiences *
                </label>
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    value={newActivity}
                    onChange={(e) => setNewActivity(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Add an activity or experience"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addActivity())}
                  />
                  <button
                    type="button"
                    onClick={addActivity}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {newPlace.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="flex items-center space-x-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                    >
                      <span>{activity}</span>
                      <button
                        type="button"
                        onClick={() => removeActivity(activity)}
                        className="text-emerald-600 hover:text-emerald-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best Season to Visit *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {seasons.map(season => (
                      <label key={season} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={newPlace.bestSeason.includes(season)}
                          onChange={() => handleArrayToggle('bestSeason', season)}
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{season}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Price per Person *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={newPlace.estimatedPrice}
                    onChange={(e) => handleInputChange('estimatedPrice', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Price in INR"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={newPlace.difficulty}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty} className="capitalize">
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Images & Contact */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Images & Contact Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images * (Maximum 5 images)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600 mb-4">
                    Upload high-quality images that showcase the place and activities
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files)}
                    className="hidden"
                    id="image-upload"
                    disabled={newPlace.images.length >= 5}
                  />
                  <label
                    htmlFor="image-upload"
                    className={`cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                      newPlace.images.length >= 5
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    }`}
                  >
                    Choose Images
                  </label>
                </div>
                
                {newPlace.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {newPlace.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newPlace.contactInfo.name}
                      onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={newPlace.contactInfo.phone}
                      onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={newPlace.contactInfo.email}
                      onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Review & Submit</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4">{newPlace.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Location:</span> {newPlace.location}, {newPlace.state}
                  </div>
                  <div>
                    <span className="font-medium">Category:</span> {newPlace.category}
                  </div>
                  <div>
                    <span className="font-medium">Price:</span> ₹{newPlace.estimatedPrice}/person
                  </div>
                  <div>
                    <span className="font-medium">Difficulty:</span> {newPlace.difficulty}
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium">Activities:</span> {newPlace.activities.join(', ')}
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium">Best Season:</span> {newPlace.bestSeason.join(', ')}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="font-medium">Description:</span>
                  <p className="text-gray-600 mt-1">{newPlace.description}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Our team will review your submission within 48 hours</li>
                  <li>• We may contact you for additional information or verification</li>
                  <li>• Once approved, the place will be added to our platform</li>
                  <li>• You'll be notified when the place goes live</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
              className={`px-6 py-2 rounded-md font-medium ${
                currentStep === 1
                  ? 'invisible'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!canProceed()}
              className="px-6 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === 4 ? 'Submit for Review' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlacePage;