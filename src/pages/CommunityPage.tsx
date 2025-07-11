import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Heart, Share2, Plus, MapPin, Star, Camera, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    location: string;
    type: 'traveler' | 'host' | 'local';
  };
  content: string;
  images: string[];
  likes: number;
  comments: number;
  timestamp: Date;
  tags: string[];
}

interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  attendees: number;
  image: string;
  organizer: string;
}

interface CommunityStory {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
  readTime: string;
  likes: number;
}

const CommunityPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('posts');
  const [newPost, setNewPost] = useState('');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const communityPosts: CommunityPost[] = [
    {
      id: '1',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Mumbai',
        type: 'traveler'
      },
      content: 'Just returned from an incredible stay at Araku Valley! The tribal community was so welcoming, and the coffee plantation tour was educational. The homestay experience was truly authentic. Highly recommend for anyone seeking genuine cultural immersion! 🌿☕',
      images: [
        'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 24,
      comments: 8,
      timestamp: new Date('2024-01-15'),
      tags: ['Araku Valley', 'Tribal Culture', 'Coffee']
    },
    {
      id: '2',
      author: {
        name: 'Ravi Kumar',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Araku Valley',
        type: 'host'
      },
      content: 'Excited to welcome more travelers to our beautiful valley! We have new bamboo workshops starting next month. Come learn traditional crafts while supporting our community. Every visitor helps preserve our ancient traditions! 🎋',
      images: [
        'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 31,
      comments: 12,
      timestamp: new Date('2024-01-12'),
      tags: ['Bamboo Crafts', 'Traditional Skills', 'Community']
    },
    {
      id: '3',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'London',
        type: 'traveler'
      },
      content: 'The Pochampally weaving experience was mesmerizing! Watching master weavers create those intricate Ikat patterns was like witnessing magic. Bought some beautiful sarees directly from the artisans. Supporting traditional crafts feels so meaningful! 🧵✨',
      images: [
        'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 18,
      comments: 6,
      timestamp: new Date('2024-01-10'),
      tags: ['Pochampally', 'Weaving', 'Handicrafts']
    }
  ];

  const upcomingEvents: CommunityEvent[] = [
    {
      id: '1',
      title: 'Harvest Festival in Thanjavur',
      description: 'Join the traditional rice harvest celebration with local farmers. Experience authentic Tamil culture, folk performances, and traditional feast.',
      date: new Date('2024-02-15'),
      location: 'Thanjavur Villages, Tamil Nadu',
      attendees: 45,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=300',
      organizer: 'Thanjavur Arts Collective'
    },
    {
      id: '2',
      title: 'Coffee Plantation Workshop',
      description: 'Learn about sustainable coffee farming, processing techniques, and taste the finest Coorg coffee varieties.',
      date: new Date('2024-02-20'),
      location: 'Coorg Coffee Estates, Karnataka',
      attendees: 28,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=300',
      organizer: 'Kodava Plantation Collective'
    },
    {
      id: '3',
      title: 'Tribal Art & Craft Fair',
      description: 'Showcase of traditional tribal arts, crafts, and cultural performances. Meet artisans and learn ancient techniques.',
      date: new Date('2024-02-25'),
      location: 'Maredumilli, Andhra Pradesh',
      attendees: 67,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=300',
      organizer: 'Venu Tribal Cooperative'
    }
  ];

  const featuredStories: CommunityStory[] = [
    {
      id: '1',
      title: 'How Rural Tourism Changed My Life',
      excerpt: 'A solo traveler\'s journey of self-discovery through authentic village experiences across India...',
      author: 'Meera Patel',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300',
      readTime: '5 min read',
      likes: 89
    },
    {
      id: '2',
      title: 'Preserving Ancient Weaving Traditions',
      excerpt: 'Meet the master weavers of Pochampally who are keeping the UNESCO heritage craft alive...',
      author: 'Rajesh Gupta',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=300',
      readTime: '7 min read',
      likes: 156
    },
    {
      id: '3',
      title: 'From City to Village: A Host\'s Story',
      excerpt: 'How a software engineer became a rural tourism host and found purpose in community development...',
      author: 'Lakshmi Devi',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=300',
      readTime: '6 min read',
      likes: 203
    }
  ];

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const handleShare = (postId: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'VillageStay Community Post',
        text: 'Check out this amazing rural tourism experience!',
        url: `${window.location.origin}/community/post/${postId}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/community/post/${postId}`);
      alert('Link copied to clipboard!');
    }
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      // Add new post logic here
      setNewPost('');
      alert('Post shared successfully!');
    }
  };

  const tabs = [
    { id: 'posts', label: t('community.posts'), icon: MessageCircle },
    { id: 'events', label: t('community.events'), icon: Calendar },
    { id: 'stories', label: t('community.stories'), icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('community.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('community.description')}
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600">2,500+</div>
            <div className="text-sm text-gray-600">{t('community.members')}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">1,200+</div>
            <div className="text-sm text-gray-600">{t('community.posts')}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">45</div>
            <div className="text-sm text-gray-600">{t('community.events')}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-2xl font-bold text-amber-600">350+</div>
            <div className="text-sm text-gray-600">{t('community.stories')}</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'posts' && (
              <div className="space-y-6">
                {/* Create Post */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder={`${t('community.share_story')}...`}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                        rows={3}
                      />
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-emerald-600">
                            <Camera className="h-4 w-4" />
                            <span className="text-sm">Photo</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-emerald-600">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">Location</span>
                          </button>
                        </div>
                        <button
                          onClick={handlePostSubmit}
                          disabled={!newPost.trim()}
                          className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Send className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts */}
                {communityPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.author.type === 'host' ? 'bg-emerald-100 text-emerald-700' :
                            post.author.type === 'local' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {post.author.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{post.author.location}</span>
                          <span>•</span>
                          <span>{post.timestamp.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{post.content}</p>

                    {post.images.length > 0 && (
                      <div className={`grid gap-2 mb-4 ${
                        post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                      }`}>
                        {post.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Post image ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-1 ${
                            likedPosts.has(post.id) ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                          <span className="text-sm">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                      </div>
                      <button
                        onClick={() => handleShare(post.id)}
                        className="flex items-center space-x-1 text-gray-500 hover:text-emerald-600"
                      >
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">{t('common.share')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date.toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 font-medium">
                          {t('community.join')}
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="text-sm text-gray-500">
                        Organized by <span className="font-medium">{event.organizer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'stories' && (
              <div className="space-y-6">
                {featuredStories.map((story) => (
                  <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                        <p className="text-gray-600 mb-4">{story.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>By {story.author}</span>
                            <span>•</span>
                            <span>{story.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-gray-500">
                              <Heart className="h-4 w-4" />
                              <span className="text-sm">{story.likes}</span>
                            </div>
                            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                    <Plus className="h-4 w-4" />
                    <span>{t('community.share_story')}</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    <Calendar className="h-4 w-4" />
                    <span>Create Event</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                    <MapPin className="h-4 w-4" />
                    <span>{t('common.add_place')}</span>
                  </button>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-2">
                  {['#TribalCulture', '#CoffeeExperience', '#TraditionalCrafts', '#RuralLife', '#SustainableTourism'].map((tag, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Community Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Respect local cultures and traditions</li>
                  <li>• Share authentic experiences</li>
                  <li>• Support local communities</li>
                  <li>• Be kind and helpful to fellow travelers</li>
                  <li>• Promote sustainable tourism practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;