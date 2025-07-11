import { Destination } from '../data/destinations';

export interface RecommendationFilters {
  budget: number;
  groupSize: number;
  preferredStates?: string[];
  season?: string;
  interests?: string[];
  duration?: string;
  difficulty?: string;
  budgetCategory?: string;
}

export interface AIRecommendation {
  destination: Destination;
  matchScore: number;
  reasons: string[];
  seasonalAdvice: string;
  budgetBreakdown: {
    accommodation: number;
    activities: number;
    food: number;
    transport: number;
    total: number;
  };
}

class AIRecommendationService {
  private calculateMatchScore(destination: Destination, filters: RecommendationFilters): number {
    let score = 0;
    let maxScore = 0;

    // Budget compatibility (30% weight)
    maxScore += 30;
    const totalCost = this.calculateTotalCost(destination, filters.groupSize, filters.duration || '2-3 days');
    if (totalCost <= filters.budget) {
      score += 30;
    } else if (totalCost <= filters.budget * 1.2) {
      score += 20;
    } else if (totalCost <= filters.budget * 1.5) {
      score += 10;
    }

    // Group size compatibility (20% weight)
    maxScore += 20;
    if (filters.groupSize >= destination.minGroupSize && filters.groupSize <= destination.maxGroupSize) {
      score += 20;
    } else if (filters.groupSize <= destination.maxGroupSize + 2) {
      score += 15;
    }

    // Season compatibility (20% weight)
    maxScore += 20;
    if (filters.season && destination.bestSeason.includes(filters.season)) {
      score += 20;
    } else if (filters.season) {
      score += 10;
    }

    // Interest matching (20% weight)
    maxScore += 20;
    if (filters.interests && filters.interests.length > 0) {
      const matchingInterests = filters.interests.filter(interest => 
        destination.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase())) ||
        destination.idealFor.some(ideal => ideal.toLowerCase().includes(interest.toLowerCase()))
      );
      score += (matchingInterests.length / filters.interests.length) * 20;
    } else {
      score += 10; // Default score if no interests specified
    }

    // State preference (10% weight)
    maxScore += 10;
    if (filters.preferredStates && filters.preferredStates.includes(destination.state)) {
      score += 10;
    } else if (!filters.preferredStates || filters.preferredStates.length === 0) {
      score += 5;
    }

    return Math.round((score / maxScore) * 100);
  }

  private calculateTotalCost(destination: Destination, groupSize: number, duration: string): number {
    const nights = this.parseDuration(duration);
    const baseAccommodation = destination.price * nights;
    const activities = Math.round(baseAccommodation * 0.3);
    const food = Math.round(baseAccommodation * 0.4);
    const transport = Math.round(baseAccommodation * 0.2);
    
    return Math.round((baseAccommodation + activities + food + transport) * (groupSize * 0.8));
  }

  private parseDuration(duration: string): number {
    const match = duration.match(/(\d+)/);
    return match ? parseInt(match[1]) : 2;
  }

  private generateReasons(destination: Destination, filters: RecommendationFilters, score: number): string[] {
    const reasons: string[] = [];

    if (score >= 80) {
      reasons.push(`Perfect match for your ${filters.groupSize} person group`);
    }

    if (filters.season && destination.bestSeason.includes(filters.season)) {
      reasons.push(`Ideal season for visiting (${filters.season})`);
    }

    if (filters.interests) {
      const matchingInterests = filters.interests.filter(interest => 
        destination.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))
      );
      if (matchingInterests.length > 0) {
        reasons.push(`Matches your interests: ${matchingInterests.join(', ')}`);
      }
    }

    if (destination.rating >= 4.5) {
      reasons.push(`Highly rated destination (${destination.rating}/5)`);
    }

    if (destination.sustainability.communityImpact.includes('90%') || destination.sustainability.communityImpact.includes('95%')) {
      reasons.push('High community impact - supports local families directly');
    }

    if (destination.budgetCategory === 'budget' && filters.budget < 5000) {
      reasons.push('Budget-friendly option with authentic experiences');
    }

    return reasons;
  }

  private generateSeasonalAdvice(destination: Destination, season?: string): string {
    if (!season) return 'Visit during the recommended months for the best experience.';

    if (destination.bestSeason.includes(season)) {
      return `${season} is perfect for ${destination.name}! Expect pleasant weather and optimal conditions for all activities.`;
    } else {
      const bestMonths = destination.bestSeason.slice(0, 3).join(', ');
      return `While ${season} is possible, consider visiting during ${bestMonths} for the best experience.`;
    }
  }

  public async getRecommendations(
    destinations: Destination[], 
    filters: RecommendationFilters
  ): Promise<AIRecommendation[]> {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const recommendations: AIRecommendation[] = destinations
      .map(destination => {
        const matchScore = this.calculateMatchScore(destination, filters);
        const totalCost = this.calculateTotalCost(destination, filters.groupSize, filters.duration || '2-3 days');
        
        return {
          destination,
          matchScore,
          reasons: this.generateReasons(destination, filters, matchScore),
          seasonalAdvice: this.generateSeasonalAdvice(destination, filters.season),
          budgetBreakdown: {
            accommodation: Math.round(totalCost * 0.4),
            activities: Math.round(totalCost * 0.25),
            food: Math.round(totalCost * 0.2),
            transport: Math.round(totalCost * 0.15),
            total: totalCost
          }
        };
      })
      .filter(rec => rec.matchScore >= 30) // Only show destinations with reasonable match
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 10); // Top 10 recommendations

    return recommendations;
  }

  public async getSmartSuggestions(query: string): Promise<string[]> {
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 500));

    const suggestions: { [key: string]: string[] } = {
      'budget': ['Budget-friendly destinations under ₹3000', 'Affordable rural experiences', 'Low-cost authentic stays'],
      'adventure': ['Trekking and hiking destinations', 'Water sports and rafting', 'Rock climbing locations'],
      'culture': ['Traditional craft workshops', 'Folk performances and festivals', 'Heritage village tours'],
      'nature': ['Wildlife spotting locations', 'Bird watching destinations', 'Forest and mountain retreats'],
      'food': ['Cooking class destinations', 'Local cuisine experiences', 'Farm-to-table locations'],
      'family': ['Family-friendly destinations', 'Safe and comfortable stays', 'Educational experiences for kids'],
      'solo': ['Solo traveler safe destinations', 'Peaceful retreat locations', 'Photography hotspots'],
      'group': ['Group activity destinations', 'Team building experiences', 'Large accommodation options']
    };

    const queryLower = query.toLowerCase();
    for (const [key, values] of Object.entries(suggestions)) {
      if (queryLower.includes(key)) {
        return values;
      }
    }

    return [
      'Explore tribal cultures in Araku Valley',
      'Experience backwater life in Kerala',
      'Learn traditional crafts in Pochampally',
      'Discover coffee plantations in Coorg'
    ];
  }
}

export const aiRecommendationService = new AIRecommendationService();