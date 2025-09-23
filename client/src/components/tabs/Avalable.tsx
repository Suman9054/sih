import { Calendar, Users, Award } from 'lucide-react';
import * as React from 'react';
interface Challenge {
  id: number;
  title: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  participants: number;
  maxScore: number;
  description: string;
}


export default function Available () {

     const availableChallenges: Challenge[] = [
  {
    id: 1,
    title: "Plastic-Free Day Challenge",
    category: "Sustainability",
    difficulty: "Easy",
    duration: "1 day",
    participants: 1205,
    maxScore: 50,
    description: "Learn about alternatives to single-use plastics and go plastic-free for 24 hours"
  },
  {
    id: 2,
    title: "Western Ghats Biodiversity Quiz",
    category: "Education",
    difficulty: "Medium",
    duration: "1 week",
    participants: 856,
    maxScore: 200,
    description: "Test your knowledge about this UNESCO World Heritage site and its endemic species"
  },
  {
    id: 3,
    title: "River Conservation Project",
    category: "Water Conservation",
    difficulty: "Hard",
    duration: "14 days",
    participants: 2340,
    maxScore: 500,
    description: "Collaborate with others to solve water pollution cases and restore local waterways"
  },
  {
    id: 4,
    title: "Mangrove Restoration Drive",
    category: "Marine Conservation",
    difficulty: "Medium",
    duration: "30 days",
    participants: 1456,
    maxScore: 300,
    description: "Help restore coastal mangrove ecosystems and protect marine biodiversity"
  },
  {
    id: 5,
    title: "Urban Wildlife Spotting",
    category: "Wildlife Research",
    difficulty: "Easy",
    duration: "7 days",
    participants: 987,
    maxScore: 100,
    description: "Document urban wildlife in your city and contribute to citizen science databases"
  },
  {
    id: 6,
    title: "Renewable Energy Calculator",
    category: "Renewable Energy",
    difficulty: "Medium",
    duration: "3 days",
    participants: 743,
    maxScore: 150,
    description: "Calculate your home's renewable energy potential and create an implementation plan"
  },
  {
    id: 7,
    title: "Native Plant Identification",
    category: "Biodiversity",
    difficulty: "Easy",
    duration: "10 days",
    participants: 1834,
    maxScore: 120,
    description: "Learn to identify 25 native plants in your region and their ecological importance"
  },
  {
    id: 8,
    title: "Carbon Footprint Reduction",
    category: "Climate Action",
    difficulty: "Hard",
    duration: "60 days",
    participants: 567,
    maxScore: 800,
    description: "Implement strategies to reduce your carbon footprint by 30% over two months"
  },
  {
    id: 9,
    title: "Butterfly Garden Workshop",
    category: "Biodiversity",
    difficulty: "Medium",
    duration: "21 days",
    participants: 1205,
    maxScore: 250,
    description: "Create a butterfly-friendly garden with native host plants and nectar sources"
  },
  {
    id: 10,
    title: "Water Conservation Audit",
    category: "Water Conservation",
    difficulty: "Easy",
    duration: "5 days",
    participants: 2156,
    maxScore: 80,
    description: "Conduct a comprehensive water usage audit and implement conservation measures"
  },
  {
    id: 11,
    title: "Eco-Friendly Transportation",
    category: "Sustainable Transport",
    difficulty: "Medium",
    duration: "14 days",
    participants: 1342,
    maxScore: 200,
    description: "Switch to eco-friendly transportation methods for two weeks and track emissions saved"
  },
  {
    id: 12,
    title: "Forest Fire Prevention Campaign",
    category: "Forest Conservation",
    difficulty: "Hard",
    duration: "45 days",
    participants: 423,
    maxScore: 600,
    description: "Organize community awareness campaigns and implement fire prevention strategies"
  }
];

   const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Health': return 'bg-pink-500';
      case 'Programming': return 'bg-blue-500';
      case 'Education': return 'bg-purple-500';
      case 'Wellness': return 'bg-green-500';
      case 'Arts': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };
  return (
    <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Available Challenges</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {availableChallenges.map((challenge) => (
                <div key={challenge.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(challenge.category)}`}></div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{challenge.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{challenge.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{challenge.participants}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-sm">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-600">Max Score:</span>
                        <span className="font-medium">{challenge.maxScore}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition-colors">
                      Join Challenge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  );
}
