import { CheckCircle, Clock, Star } from 'lucide-react';
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

interface EnrolledChallenge extends Challenge {
  progress: number;
  daysLeft: number;
  currentScore: number;
  status: 'active' | 'completed' | 'paused';
}

const enrolledChallenges: EnrolledChallenge[] = [
  {
    id: 1,
    title: 'Zero Waste Weekend',
    category: 'Sustainability',
    difficulty: 'Easy',
    duration: '2 days',
    participants: 3247,
    maxScore: 150,
    description: 'Go completely waste-free for 48 hours and document your journey',
    progress: 67,
    daysLeft: 1,
    currentScore: 100,
    status: 'active'
  },
  {
    id: 2,
    title: "Plant a Tree Daily",
    category: "Reforestation",
    difficulty: "Medium",
    duration: "30 days",
    participants: 2845,
    maxScore: 1200,
    description: "Plant one sapling every day and track its growth progress",
    progress: 23,
    daysLeft: 23,
    currentScore: 276,
    status: "active"
  },
  {
    id: 3,
    title: "Wildlife Photography Quest",
    category: "Conservation",
    difficulty: "Hard",
    duration: "60 days",
    participants: 1567,
    maxScore: 2000,
    description: "Capture and document 50 different local wildlife species in their natural habitat",
    progress: 45,
    daysLeft: 33,
    currentScore: 900,
    status: "active"
  },
  {
    id: 4,
    title: "Ocean Cleanup Initiative",
    category: "Marine Conservation",
    difficulty: "Medium",
    duration: "14 days",
    participants: 4521,
    maxScore: 800,
    description: "Clean beach areas and remove plastic waste from coastlines daily",
    progress: 100,
    daysLeft: 0,
    currentScore: 800,
    status: "completed"
  },
  {
    id: 5,
    title: "Pollinator Garden Creation",
    category: "Biodiversity",
    difficulty: "Easy",
    duration: "21 days",
    participants: 892,
    maxScore: 600,
    description: "Create a bee and butterfly-friendly garden with 15+ native flowering plants",
    progress: 71,
    daysLeft: 6,
    currentScore: 426,
    status: "active"
  },
  {
    id: 6,
    title: "Himalayan Trek & Conservation",
    category: "Adventure Conservation",
    difficulty: "Hard",
    duration: "45 days",
    participants: 234,
    maxScore: 2500,
    description: "Complete 5 mountain treks while collecting environmental data and removing litter",
    progress: 12,
    daysLeft: 40,
    currentScore: 300,
    status: "active"
  },
  {
    id: 7,
    title: "Urban Forest Development",
    category: "Reforestation",
    difficulty: "Medium",
    duration: "90 days",
    participants: 1876,
    maxScore: 1800,
    description: "Transform unused urban spaces into mini forests using Miyawaki method",
    progress: 34,
    daysLeft: 59,
    currentScore: 612,
    status: "active"
  },
  {
    id: 8,
    title: "Solar Energy Transition",
    category: "Renewable Energy",
    difficulty: "Medium",
    duration: "30 days",
    participants: 3156,
    maxScore: 1000,
    description: "Switch to solar power for daily energy needs and track carbon footprint reduction",
    progress: 88,
    daysLeft: 4,
    currentScore: 880,
    status: "active"
  },
  {
    id: 9,
    title: "River Restoration Project",
    category: "Water Conservation",
    difficulty: "Hard",
    duration: "120 days",
    participants: 678,
    maxScore: 3000,
    description: "Participate in local river cleaning and water quality monitoring initiatives",
    progress: 100,
    daysLeft: 0,
    currentScore: 3000,
    status: "completed"
  },
  {
    id: 10,
    title: "Organic Farming Challenge",
    category: "Sustainable Agriculture",
    difficulty: "Medium",
    duration: "75 days",
    participants: 1432,
    maxScore: 1500,
    description: "Grow organic vegetables without pesticides and share farming techniques",
    progress: 0,
    daysLeft: 75,
    currentScore: 0,
    status: "paused"
  },
  {
    id: 11,
    title: "Bird Migration Tracking",
    category: "Wildlife Research",
    difficulty: "Easy",
    duration: "28 days",
    participants: 567,
    maxScore: 700,
    description: "Document and report migratory bird patterns in your local area",
    progress: 54,
    daysLeft: 13,
    currentScore: 378,
    status: "active"
  },
  {
    id: 12,
    title: "Composting Revolution",
    category: "Waste Management",
    difficulty: "Easy",
    duration: "42 days",
    participants: 2134,
    maxScore: 900,
    description: "Create and maintain a home composting system for organic waste",
    progress: 79,
    daysLeft: 9,
    currentScore: 711,
    status: "active"
  }
];
export default function Enrolled () {

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
            <h2 className="text-xl font-bold text-gray-900">My Enrolled Challenges</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enrolledChallenges.map((challenge) => (
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
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            challenge.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.daysLeft > 0 ? `${challenge.daysLeft} days left` : 'Completed'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">{challenge.currentScore}</span>
                        </div>
                      </div>
                      
                      {challenge.status === 'completed' && (
                        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-2 rounded-lg">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Challenge Completed!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  );
}
