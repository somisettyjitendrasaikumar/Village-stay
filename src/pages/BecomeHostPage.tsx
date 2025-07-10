import React, { useState } from 'react';
import { User, Home, Palette, Shield, Upload, CheckCircle, ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BecomeHostPage: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    phone: '',
    email: '',
    village: '',
    district: '',
    state: '',
    
    // Property Information
    propertyType: '',
    rooms: '',
    capacity: '',
    amenities: [] as string[],
    
    // Cultural Offerings
    culturalActivities: [] as string[],
    traditionalSkills: [] as string[],
    localCuisine: [] as string[],
    festivals: [] as string[],
    handicrafts: [] as string[],
    languages: [] as string[],
    experience: '',
    
    // Verification
    idProof: null as File | null,
    propertyPhotos: [] as File[],
    certificates: [] as File[]
  });

  const steps = [
    { number: 1, title: t('host.personal_info'), icon: User },
    { number: 2, title: t('host.property_info'), icon: Home },
    { number: 3, title: t('host.cultural_offerings'), icon: Palette },
    { number: 4, title: t('host.verification'), icon: Shield }
  ];

  const propertyTypes = [
    'Traditional House',
    'Farmhouse',
    'Tribal Hut',
    'Heritage Home',
    'Eco Lodge',
    'Community Hall'
  ];

  const amenitiesOptions = [
    'Clean Water',
    'Electricity',
    'Traditional Kitchen',
    'Organic Garden',
    'Cattle Shed',
    'Courtyard',
    'Well/Borewell',
    'Solar Power',
    'Compost Toilet',
    'Traditional Furniture'
  ];

  const culturalActivitiesOptions = [
    'Folk Dance Performances',
    'Traditional Music',
    'Cooking Classes',
    'Craft Workshops',
    'Farming Experience',
    'Cattle Care',
    'Village Walks',
    'Storytelling Sessions',
    'Festival Celebrations',
    'Religious Ceremonies'
  ];

  const traditionalSkillsOptions = [
    'Pottery Making',
    'Weaving',
    'Wood Carving',
    'Metal Work',
    'Painting',
    'Embroidery',
    'Basket Making',
    'Organic Farming',
    'Herbal Medicine',
    'Traditional Construction'
  ];

  const localCuisineOptions = [
    'Traditional Breakfast',
    'Regional Thali',
    'Festival Foods',
    'Street Food',
    'Organic Vegetables',
    'Dairy Products',
    'Traditional Sweets',
    'Herbal Teas',
    'Fermented Foods',
    'Seasonal Specialties'
  ];

  const festivalOptions = [
    'Harvest Festivals',
    'Religious Festivals',
    'Seasonal Celebrations',
    'Wedding Ceremonies',
    'Cultural Programs',
    'Folk Performances',
    'Community Gatherings',
    'Traditional Games',
    'Craft Fairs',
    'Food Festivals'
  ];

  const handicraftOptions = [
    'Pottery',
    'Textiles',
    'Wood Crafts',
    'Metal Work',
    'Jewelry',
    'Paintings',
    'Baskets',
    'Toys',
    'Decorative Items',
    'Utility Items'
  ];

  const languageOptions = [
    'Telugu',
    'Hindi',
    'English',
    'Tamil',
    'Kannada',
    'Marathi',
    'Bengali',
    'Gujarati',
    'Punjabi',
    'Local Dialect'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
    }));
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (files) {
      if (field === 'idProof') {
        handleInputChange(field, files[0]);
      } else {
        handleInputChange(field, Array.from(files));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit application
      alert('Application submitted successfully! We will review and contact you within 48 hours.');
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Earn Sustainable Income',
      description: 'Generate steady income while preserving your cultural heritage'
    },
    {
      icon: Users,
      title: 'Share Your Culture',
      description: 'Introduce travelers to authentic rural traditions and lifestyle'
    },
    {
      icon: Star,
      title: 'Build Your Reputation',
      description: 'Become a recognized cultural ambassador for your community'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('host.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('host.subtitle')}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
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
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
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
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('host.personal_info')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.full_name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.village')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.village}
                    onChange={(e) => handleInputChange('village', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.district')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.district}
                    onChange={(e) => handleInputChange('district', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.state')} *
                  </label>
                  <select
                    required
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Property Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('host.property_info')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.property_type')} *
                  </label>
                  <select
                    required
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select Property Type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.rooms')} *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.rooms}
                    onChange={(e) => handleInputChange('rooms', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('host.capacity')} *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.capacity}
                    onChange={(e) => handleInputChange('capacity', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.amenities')} (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {amenitiesOptions.map(amenity => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => handleArrayToggle('amenities', amenity)}
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Cultural Offerings */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('host.cultural_offerings')}</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.cultural_activities')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {culturalActivitiesOptions.map(activity => (
                    <label key={activity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.culturalActivities.includes(activity)}
                        onChange={() => handleArrayToggle('culturalActivities', activity)}
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{activity}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.traditional_skills')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {traditionalSkillsOptions.map(skill => (
                    <label key={skill} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.traditionalSkills.includes(skill)}
                        onChange={() => handleArrayToggle('traditionalSkills', skill)}
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.local_cuisine')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {localCuisineOptions.map(cuisine => (
                    <label key={cuisine} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.localCuisine.includes(cuisine)}
                        onChange={() => handleArrayToggle('localCuisine', cuisine)}
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.languages')} *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {languageOptions.map(language => (
                    <label key={language} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(language)}
                        onChange={() => handleArrayToggle('languages', language)}
                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{language}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.experience')} *
                </label>
                <select
                  required
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 4: Verification */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('host.verification')}</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.id_proof')} * (Aadhaar, Voter ID, Passport)
                </label>
                <input
                  type="file"
                  required
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => handleFileUpload('idProof', e.target.files)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.property_photos')} * (Minimum 5 photos)
                </label>
                <input
                  type="file"
                  required
                  multiple
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('propertyPhotos', e.target.files)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Include photos of rooms, common areas, kitchen, and surroundings
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('host.certificates')} (Optional)
                </label>
                <input
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => handleFileUpload('certificates', e.target.files)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Tourism certificates, craft awards, or other relevant documents
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• We'll review your application within 48 hours</li>
                  <li>• Our team may contact you for additional information</li>
                  <li>• Once approved, you'll receive host training materials</li>
                  <li>• Your listing will go live after final verification</li>
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
              className="flex items-center space-x-2 px-6 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700"
            >
              <span>{currentStep === 4 ? t('host.submit') : 'Continue'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeHostPage;