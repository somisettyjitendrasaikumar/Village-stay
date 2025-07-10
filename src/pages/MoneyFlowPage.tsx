import React, { useState } from 'react';
import { TrendingUp, Users, Palette, Car, UtensilsCrossed, Calendar, Building, Settings, PieChart, BarChart3, ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MoneyDistribution {
  category: string;
  percentage: number;
  amount: number;
  recipients: string[];
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const MoneyFlowPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedBooking, setSelectedBooking] = useState('recent');
  const [viewMode, setViewMode] = useState<'chart' | 'detailed'>('chart');

  // Sample booking data
  const bookingAmount = 5250;
  
  const moneyDistribution: MoneyDistribution[] = [
    {
      category: t('money_flow.guides'),
      percentage: 25,
      amount: Math.round(bookingAmount * 0.25),
      recipients: ['Ravi Kumar (Village Guide)', 'Lakshmi Devi (Cultural Guide)', 'Venkat Rao (Nature Guide)'],
      description: 'Local guides who provide authentic cultural experiences and nature walks',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      category: t('money_flow.accommodation'),
      percentage: 30,
      amount: Math.round(bookingAmount * 0.30),
      recipients: ['Srinivas Family Homestay', 'Village Community Hall'],
      description: 'Accommodation providers offering authentic rural stay experiences',
      icon: Building,
      color: 'bg-green-500'
    },
    {
      category: t('money_flow.artisans'),
      percentage: 15,
      amount: Math.round(bookingAmount * 0.15),
      recipients: ['Padma Reddy (Kalamkari Artist)', 'Mohammed Ali (Bidriware)', 'Craft Cooperative'],
      description: 'Local artisans creating traditional handicrafts and cultural items',
      icon: Palette,
      color: 'bg-purple-500'
    },
    {
      category: t('money_flow.transport'),
      percentage: 10,
      amount: Math.round(bookingAmount * 0.10),
      recipients: ['Local Auto Drivers', 'Bullock Cart Owners', 'Boat Operators'],
      description: 'Traditional and eco-friendly local transportation services',
      icon: Car,
      color: 'bg-yellow-500'
    },
    {
      category: t('money_flow.food'),
      percentage: 12,
      amount: Math.round(bookingAmount * 0.12),
      recipients: ['Village Kitchen Collective', 'Organic Farmers', 'Local Food Vendors'],
      description: 'Local food providers offering authentic regional cuisine',
      icon: UtensilsCrossed,
      color: 'bg-red-500'
    },
    {
      category: t('money_flow.activities'),
      percentage: 8,
      amount: Math.round(bookingAmount * 0.08),
      recipients: ['Cultural Performance Groups', 'Workshop Coordinators', 'Festival Organizers'],
      description: 'Activity coordinators organizing cultural programs and workshops',
      icon: Calendar,
      color: 'bg-indigo-500'
    },
    {
      category: t('money_flow.community_fund'),
      percentage: 8,
      amount: Math.round(bookingAmount * 0.08),
      recipients: ['Village Development Committee', 'Education Fund', 'Healthcare Initiative'],
      description: 'Community development projects and social welfare initiatives',
      icon: TrendingUp,
      color: 'bg-emerald-500'
    },
    {
      category: t('money_flow.platform_fee'),
      percentage: 7,
      amount: Math.round(bookingAmount * 0.07),
      recipients: ['Technology Maintenance', 'Customer Support', 'Marketing'],
      description: 'Platform operations, technology maintenance, and support services',
      icon: Settings,
      color: 'bg-gray-500'
    }
  ];

  const generatePDFReport = () => {
    // Mock PDF generation
    const pdfContent = `
VillageStay - Money Distribution Report
=====================================

Booking Amount: ₹${bookingAmount}
Date: ${new Date().toLocaleDateString()}

Distribution Breakdown:
${moneyDistribution.map(item => 
  `${item.category}: ₹${item.amount} (${item.percentage}%)`
).join('\n')}

Total to Community: ₹${moneyDistribution.slice(0, -1).reduce((sum, item) => sum + item.amount, 0)}
Platform Fee: ₹${moneyDistribution[moneyDistribution.length - 1].amount}

Impact Created:
- ${moneyDistribution.slice(0, -1).reduce((sum, item) => sum + item.recipients.length, 0)} individuals directly benefited
- ${moneyDistribution.slice(0, -1).length} different sectors supported
- 93% of payment goes directly to rural communities
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'money-distribution-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalToCommunity = moneyDistribution.slice(0, -1).reduce((sum, item) => sum + item.amount, 0);
  const platformFee = moneyDistribution[moneyDistribution.length - 1].amount;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('money_flow.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('money_flow.description')}
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Select Booking:</label>
              <select
                value={selectedBooking}
                onChange={(e) => setSelectedBooking(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="recent">Recent Booking - Araku Valley (₹5,250)</option>
                <option value="previous">Previous Booking - Lambasingi (₹6,720)</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex rounded-md shadow-sm">
                <button
                  onClick={() => setViewMode('chart')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-md border ${
                    viewMode === 'chart'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <PieChart className="h-4 w-4 inline mr-2" />
                  Chart View
                </button>
                <button
                  onClick={() => setViewMode('detailed')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                    viewMode === 'detailed'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <BarChart3 className="h-4 w-4 inline mr-2" />
                  Detailed View
                </button>
              </div>
              
              <button
                onClick={generatePDFReport}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{t('money_flow.your_payment')}</p>
                <p className="text-2xl font-bold text-gray-900">₹{bookingAmount}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{t('money_flow.total_to_community')}</p>
                <p className="text-2xl font-bold text-emerald-600">₹{totalToCommunity}</p>
                <p className="text-sm text-gray-500">{Math.round((totalToCommunity / bookingAmount) * 100)}% of total</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{t('money_flow.impact_created')}</p>
                <p className="text-2xl font-bold text-purple-600">
                  {moneyDistribution.slice(0, -1).reduce((sum, item) => sum + item.recipients.length, 0)}
                </p>
                <p className="text-sm text-gray-500">People directly benefited</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {viewMode === 'chart' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart Visualization */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Distribution Breakdown</h3>
              <div className="space-y-4">
                {moneyDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-900">{item.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">₹{item.amount}</div>
                      <div className="text-xs text-gray-500">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Community Impact</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-medium text-gray-900">Direct Beneficiaries</h4>
                  <p className="text-2xl font-bold text-emerald-600">
                    {moneyDistribution.slice(0, -1).reduce((sum, item) => sum + item.recipients.length, 0)}
                  </p>
                  <p className="text-sm text-gray-600">Individuals and families supported</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900">Sectors Supported</h4>
                  <p className="text-2xl font-bold text-blue-600">{moneyDistribution.length - 1}</p>
                  <p className="text-sm text-gray-600">Different economic sectors</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900">Community Retention</h4>
                  <p className="text-2xl font-bold text-purple-600">93%</p>
                  <p className="text-sm text-gray-600">Of payment stays in rural communities</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {moneyDistribution.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">₹{item.amount}</div>
                      <div className="text-sm text-gray-500">{item.percentage}% of total</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Recipients:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {item.recipients.map((recipient, recipientIndex) => (
                        <div
                          key={recipientIndex}
                          className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md"
                        >
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-700">{recipient}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Transparency Statement */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Transparency</h2>
            <p className="text-emerald-100 mb-6 max-w-3xl mx-auto">
              We believe in complete transparency about how your money supports rural communities. 
              Every rupee is tracked and distributed fairly to ensure maximum impact for local people.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">0%</div>
                <div className="text-emerald-200">Hidden Fees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-emerald-200">Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Direct</div>
                <div className="text-emerald-200">Community Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyFlowPage;