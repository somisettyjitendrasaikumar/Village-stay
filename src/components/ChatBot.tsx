import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

interface ChatBotProps {
  onDestinationRecommend?: (query: string) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onDestinationRecommend }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your VillageStay assistant. I can help you find perfect rural destinations, plan your budget, and answer questions about sustainable tourism. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Show me budget destinations under ₹3000",
        "Find places for adventure activities",
        "Recommend destinations for families",
        "What's the best season to visit?"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = async (userMessage: string): Promise<Message> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const message = userMessage.toLowerCase();
    let response = '';
    let suggestions: string[] = [];

    // Intent recognition and response generation
    if (message.includes('budget') || message.includes('cheap') || message.includes('affordable')) {
      response = "I can help you find budget-friendly destinations! Here are some great options under ₹3000 per person: Pochampally Village (₹2200), Medak Village (₹1800), and Araku Valley (₹2500). These places offer authentic experiences while supporting local communities directly.";
      suggestions = [
        "Tell me more about Pochampally Village",
        "What activities are included in the price?",
        "Show me more budget options",
        "How much for a group of 4 people?"
      ];
    } else if (message.includes('adventure') || message.includes('trekking') || message.includes('activities')) {
      response = "For adventure seekers, I recommend Coorg Coffee Estates (trekking, river rafting), Wayanad Tribal Villages (forest trekking, bamboo rafting), or Araku Valley (waterfall trekking, cave exploration). Each offers unique outdoor experiences with local guides.";
      suggestions = [
        "What's the difficulty level?",
        "Best season for adventure activities?",
        "Safety measures and equipment provided?",
        "Can beginners participate?"
      ];
    } else if (message.includes('family') || message.includes('kids') || message.includes('children')) {
      response = "Perfect family destinations include Lambasingi (peaceful mountain setting), Chettinad Villages (cultural learning), and Kumrakonam Backwaters (safe boat rides). All offer educational experiences and comfortable accommodations suitable for children.";
      suggestions = [
        "Age-appropriate activities available?",
        "Family accommodation options?",
        "Educational programs for kids?",
        "Safety measures for families?"
      ];
    } else if (message.includes('season') || message.includes('weather') || message.includes('when')) {
      response = "The best time for most destinations is October to March when the weather is pleasant. However, each place has its unique charm: Monsoon season (June-September) is beautiful for Kerala backwaters, while winter (December-February) is perfect for Tamil Nadu and Karnataka destinations.";
      suggestions = [
        "Specific weather for each destination?",
        "Monsoon season experiences?",
        "Festival seasons to visit?",
        "Off-season discounts available?"
      ];
    } else if (message.includes('culture') || message.includes('traditional') || message.includes('heritage')) {
      response = "For rich cultural experiences, visit Pochampally Village (UNESCO weaving heritage), Thanjavur Villages (classical arts), Chettinad Villages (unique architecture), or Hampi Village (UNESCO World Heritage). Each offers hands-on workshops and cultural immersion.";
      suggestions = [
        "Traditional craft workshops available?",
        "Cultural performances included?",
        "Local festival participation?",
        "Heritage site guided tours?"
      ];
    } else if (message.includes('food') || message.includes('cuisine') || message.includes('cooking')) {
      response = "Food lovers will enjoy Chettinad Villages (famous spicy cuisine), Kerala destinations (coconut-based dishes), Coorg (coffee and Kodava cuisine), and Thanjavur (traditional Tamil meals). Most places offer cooking classes with local families.";
      suggestions = [
        "Cooking classes with locals?",
        "Vegetarian food options?",
        "Special dietary requirements?",
        "Local market visits included?"
      ];
    } else if (message.includes('group') || message.includes('friends') || message.includes('team')) {
      response = "For groups, I recommend destinations with larger capacity: Medak Village (up to 12 people), Thanjavur Villages (up to 10), or Hampi Village (up to 10). Group discounts are available, and activities can be customized for team building.";
      suggestions = [
        "Group discount rates?",
        "Team building activities?",
        "Large accommodation options?",
        "Group transportation arrangements?"
      ];
    } else if (message.includes('solo') || message.includes('alone') || message.includes('single')) {
      response = "Solo travelers love Lambasingi (peaceful and safe), Hampi Village (rich history for exploration), and Kerala backwaters (serene and contemplative). All destinations ensure safety and have welcoming host communities.";
      suggestions = [
        "Safety measures for solo travelers?",
        "Single occupancy rates?",
        "Solo-friendly activities?",
        "Local guide availability?"
      ];
    } else if (message.includes('sustainable') || message.includes('eco') || message.includes('environment')) {
      response = "All our destinations focus on sustainability! 85-95% of your payment goes directly to local communities. We prioritize eco-friendly accommodations, traditional practices, and minimal environmental impact. Your travel creates positive change!";
      suggestions = [
        "How does money reach communities?",
        "Environmental conservation efforts?",
        "Traditional practice preservation?",
        "Carbon footprint reduction?"
      ];
    } else if (message.includes('book') || message.includes('reserve') || message.includes('availability')) {
      response = "I can help you check availability and make bookings! Please let me know your preferred destination, dates, and group size. You can also browse our destinations page for detailed information and instant booking options.";
      suggestions = [
        "Check availability for specific dates",
        "View all destinations",
        "Compare different options",
        "Contact host directly"
      ];
      if (onDestinationRecommend) {
        onDestinationRecommend(userMessage);
      }
    } else if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      response = "Our destinations range from ₹1800 to ₹4200 per person per night. This includes accommodation, most activities, and meals. The price varies based on location, season, and included experiences. Remember, your payment directly supports rural communities!";
      suggestions = [
        "What's included in the price?",
        "Additional costs to consider?",
        "Group discounts available?",
        "Payment methods accepted?"
      ];
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      response = "Hello! Welcome to VillageStay. I'm here to help you discover amazing rural destinations across India. Whether you're looking for adventure, culture, peace, or authentic experiences, I can guide you to the perfect place. What interests you most?";
      suggestions = [
        "Show me popular destinations",
        "I'm looking for budget options",
        "Recommend something unique",
        "Help me plan a trip"
      ];
    } else if (message.includes('thank') || message.includes('thanks')) {
      response = "You're very welcome! I'm always here to help you plan amazing rural experiences. Feel free to ask me anything about destinations, bookings, or sustainable tourism. Have a wonderful journey with VillageStay!";
      suggestions = [
        "Plan another trip",
        "Learn about sustainability",
        "Contact customer support",
        "Share feedback"
      ];
    } else {
      response = "I understand you're looking for information about rural tourism. Could you be more specific? I can help with destination recommendations, budget planning, seasonal advice, cultural experiences, adventure activities, or booking assistance. What would you like to know?";
      suggestions = [
        "Recommend destinations for me",
        "Help with budget planning",
        "Best seasons to travel",
        "Cultural experiences available"
      ];
    }

    return {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      suggestions
    };
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Generate bot response
    try {
      const botResponse = await generateBotResponse(messageText);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact our support team for assistance.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Open chat assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">VillageStay Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-sm">{message.text}</p>
                      {message.suggestions && (
                        <div className="mt-2 space-y-1">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="block w-full text-left text-xs bg-white bg-opacity-20 hover:bg-opacity-30 rounded px-2 py-1 transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.sender === 'user' && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <Loader className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about destinations, budget, or activities..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;