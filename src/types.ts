export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  type: 'traveler' | 'host' | 'community';
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  activities: string[];
  accommodation: string[];
  sustainability: {
    carbonFootprint: string;
    communityImpact: string;
    culturalPreservation: string;
  };
  hostInfo: {
    name: string;
    experience: string;
    languages: string[];
  };
  availability: Date[];
}

export interface Booking {
  id: string;
  destinationId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Review {
  id: string;
  userId: string;
  destinationId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
  images?: string[];
}