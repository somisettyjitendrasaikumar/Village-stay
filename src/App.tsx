import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EnhancedDestinationsPage from './pages/EnhancedDestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import BookingPage from './pages/BookingPage';
import UserDashboard from './pages/UserDashboard';
import MarketplacePage from './pages/MarketplacePage';
import MoneyFlowPage from './pages/MoneyFlowPage';
import BecomeHostPage from './pages/BecomeHostPage';
import { User } from './types';
import { Destination } from './data/destinations';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentPage('destination-detail');
  };

  const handleBooking = (destination: Destination) => {
    setSelectedDestination(destination);
    setCurrentPage('booking');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onDestinationSelect={handleDestinationSelect}
            onBooking={handleBooking}
          />
        );
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'destinations':
        return (
          <EnhancedDestinationsPage
            onDestinationSelect={handleDestinationSelect}
            onBooking={handleBooking}
          />
        );
      case 'marketplace':
        return <MarketplacePage />;
      case 'money-flow':
        return <MoneyFlowPage />;
      case 'become-host':
        return <BecomeHostPage />;
      case 'destination-detail':
        return selectedDestination ? (
          <DestinationDetailPage
            destination={selectedDestination}
            onBooking={handleBooking}
          />
        ) : (
          <HomePage onDestinationSelect={handleDestinationSelect} onBooking={handleBooking} />
        );
      case 'booking':
        return selectedDestination ? (
          <BookingPage
            destination={selectedDestination}
            user={user}
            onBookingComplete={() => setCurrentPage('dashboard')}
          />
        ) : (
          <HomePage onDestinationSelect={handleDestinationSelect} onBooking={handleBooking} />
        );
      case 'dashboard':
        return user ? (
          <UserDashboard user={user} />
        ) : (
          <HomePage onDestinationSelect={handleDestinationSelect} onBooking={handleBooking} />
        );
      default:
        return (
          <HomePage
            onDestinationSelect={handleDestinationSelect}
            onBooking={handleBooking}
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          user={user}
          onLogout={handleLogout}
        />
        {renderCurrentPage()}
      </div>
    </LanguageProvider>
  );
}

export default App;