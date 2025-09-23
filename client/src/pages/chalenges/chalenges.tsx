import React, { useState } from 'react';
import { Leaf, Users, Trophy, Clock, Star, Zap, Globe, Droplets, Recycle } from 'lucide-react';

interface Challenge {
  id: string;
  category: 'sustainability' | 'conservation' | 'education' | 'community';
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  description: string;
  duration: string;
  participants: number;
  reward: number;
  progress?: number;
  isPopular?: boolean;
  isNew?: boolean;
  icon: string;
  color: string;
  state: string;
}

const challenges: Challenge[] = [
  {
    id: '1',
    category: 'sustainability',
    level: 'beginner',
    title: 'Zero Waste Weekend',
    description: 'Go completely waste-free for 48 hours and document your journey',
    duration: '2 days',
    participants: 3247,
    reward: 150,
    progress: 67,
    isPopular: true,
    icon: '♻️',
    color: 'from-green-400 to-emerald-600',
    state:' westbangol'

  },
  {
    id: '2',
    category: 'education',
    level: 'intermediate',
    title: 'Climate Science Mastery',
    description: 'Complete interactive modules on climate change and earn certifications',
    duration: '1 week',
    participants: 1856,
    reward: 300,
    isNew: true,
    icon: '🌍',
    color: 'from-blue-400 to-cyan-600',
    state:' Himachal Pradesh'
  },
  {
    id: '3',
    category: 'community',
    level: 'advanced',
    title: 'Local Ecosystem Restoration',
    description: 'Join forces with your community to restore a local natural habitat',
    duration: '1 month',
    participants: 892,
    reward: 750,
    icon: '🌳',
    color: 'from-emerald-400 to-teal-600',
    state:' Gujarat'
  },
  {
    id: '4',
    category: 'conservation',
    level: 'beginner',
    title: 'Water Warrior Challenge',
    description: 'Track and reduce your daily water consumption by 25%',
    duration: '5 days',
    participants: 4521,
    reward: 100,
    progress: 32,
    isPopular: true,
    icon: '💧',
    color: 'from-blue-400 to-indigo-600',
    state:'Rajasthan'
  },
  {
    id: '5',
    category: 'sustainability',
    level: 'intermediate',
    title: 'Renewable Energy Detective',
    description: 'Research and propose renewable energy solutions for your area',
    duration: '10 days',
    participants: 1234,
    reward: 400,
    icon: '⚡',
    color: 'from-yellow-400 to-orange-600',
    state:'Tamil Nadu'
  },
  {
    id: '6',
    category: 'education',
    level: 'beginner',
    title: 'Biodiversity Explorer',
    description: 'Discover and catalog 20 different species in your local environment',
    duration: '1 week',
    participants: 2167,
    reward: 200,
    isNew: true,
    icon: '🦋',
    color: 'from-purple-400 to-pink-600',
    state:' Kerala'
  }
];

const categories = [
  { name: 'All', icon: Globe, count: challenges.length },
  { name: 'Sustainability', icon: Recycle, count: challenges.filter(c => c.category === 'sustainability').length },
  { name: 'Conservation', icon: Droplets, count: challenges.filter(c => c.category === 'conservation').length },
  { name: 'Education', icon: Star, count: challenges.filter(c => c.category === 'education').length },
  { name: 'Community', icon: Users, count: challenges.filter(c => c.category === 'community').length }
];

const ChallengeCard: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {challenge.isPopular && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
            🔥 Popular
          </span>
        )}
        {challenge.isNew && (
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            ✨ New
          </span>
        )}
      </div>

      <div className="p-6 relative">
        {/* Icon and Level */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-2">{challenge.icon}</div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            challenge.level === 'beginner' ? 'bg-green-100 text-green-800' :
            challenge.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {challenge.level.toUpperCase()}
          </span>
        </div>

        {/* Progress bar (if exists) */}
        {challenge.progress && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Your Progress</span>
              <span>{challenge.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 bg-gradient-to-r ${challenge.color} rounded-full transition-all`}
                style={{ width: `${challenge.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {challenge.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {challenge.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {challenge.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {challenge.participants.toLocaleString()}
          </div>
        </div>

        {/* Reward and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-600 font-bold">
            <Zap className="w-5 h-5 mr-1" />
            {challenge.reward} EcoPoints
          </div>
          <button className={`bg-gradient-to-r ${challenge.color} text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
            {challenge.progress ? 'Continue' : 'Start Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

const EcoChallengeHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredChallenges, setFilteredChallenges] = useState(challenges);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredChallenges(challenges);
    } else {
      setFilteredChallenges(challenges.filter(c => 
        c.category === category.toLowerCase()
      ));
    }
  };

  const totalParticipants = challenges.reduce((sum, challenge) => sum + challenge.participants, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
                EcoChallenge
              </span>
              <br />
              Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Join thousands of eco-warriors in making a real impact. Complete challenges, earn rewards, and save our planet together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-yellow-300" />
                <span className="font-semibold">{totalParticipants.toLocaleString()}+ Active Participants</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-6 h-6 mr-2 text-green-300" />
                <span className="font-semibold">{challenges.length} Active Challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose Your Impact Area</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ name, icon: Icon, count }) => (
              <button
                key={name}
                onClick={() => handleCategoryChange(name)}
                className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedCategory === name
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {name}
                <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default EcoChallengeHub;