import React, { useState } from 'react';
import { Trophy, Star, Calendar, Target,  } from 'lucide-react';
import { Outlet, useNavigate } from '@tanstack/react-router';

interface User {
  id: number;
  name: string;
  rank: number;
  score: number;
  level: string;
  avatar?: string;
}





const ChallengeDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'enrolled' | 'available' | 'leaderboard'>('enrolled');
  
 
  const currentUser: User = {
    id: 1,
    name: "Alex Johnson",
    rank: 5,
    score: 2450,
    level: "Advanced"
  };

  const navigation = useNavigate();
  
 

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {currentUser.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {currentUser.name}!</h1>
                <p className="text-gray-600">{currentUser.level} • Rank #{currentUser.rank}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
                <Star className="w-8 h-8 text-yellow-500" />
                <span>{currentUser.score.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-500">Total Score</p>
            </div>
          </div>
        </div>

       
        <div className="bg-white rounded-2xl shadow-sm mb-6 border border-gray-100">
          <div className="flex space-x-1 p-2">
            <button
              onClick={() =>{
                setActiveTab('enrolled');
                navigation({to: '/dashboard'});
              } }
              className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'enrolled'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-5 h-5" />
                <span>My Challenges</span>
              </div>
            </button>
            <button
              onClick={() =>{
                setActiveTab('available');
                navigation({to: '/dashboard/available'});
              } }
              className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'available'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Browse Challenges</span>
              </div>
            </button>
            <button
              onClick={() =>{
                setActiveTab('leaderboard');
                navigation({to: '/dashboard/leaderboard'})
              } }
              className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'leaderboard'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Leaderboard</span>
              </div>
            </button>
          </div>
        </div>
     <Outlet />
      </div>
    </div>
  );
};

export default ChallengeDashboard;