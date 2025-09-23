import { Medal, Star, TrendingUp, Trophy } from 'lucide-react';
import * as React from 'react';

interface User {
  id: number;
  name: string;
  rank: number;
  score: number;
  level: string;
  avatar?: string;
}
interface LeaderboardUser {
  id: number;
  name: string;
  score: number;
  rank: number;
  level: string;
  avatar?: string;
}

export default function Leaderboard () {

    const currentUser: User = {
    id: 1,
    name: "Alex Johnson",
    rank: 5,
    score: 2450,
    level: "Advanced"
  };

   const leaderboard: LeaderboardUser[] = [
    { id: 2, name: "Sarah Chen", score: 4850, rank: 1, level: "Expert" },
    { id: 3, name: "Mike Rodriguez", score: 3920, rank: 2, level: "Advanced" },
    { id: 4, name: "Emma Thompson", score: 3150, rank: 3, level: "Advanced" },
    { id: 5, name: "David Kim", score: 2890, rank: 4, level: "Advanced" },
    { id: 1, name: "Alex Johnson", score: 2450, rank: 5, level: "Advanced" },
    { id: 6, name: "Lisa Wang", score: 2200, rank: 6, level: "Intermediate" },
    { id: 7, name: "John Smith", score: 1980, rank: 7, level: "Intermediate" },
    { id: 8, name: "Anna Garcia", score: 1750, rank: 8, level: "Intermediate" }
  ];
   
   const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-orange-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-sm font-bold text-gray-600">#{rank}</span>;
    }
  };
  
  return (
    <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Global Leaderboard</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" />
                <span>Updated hourly</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={user.id} 
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                        user.id === currentUser.id 
                          ? 'bg-blue-50 border-2 border-blue-200' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {getRankIcon(user.rank)}
                      </div>
                      
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{user.name}</h3>
                          {user.id === currentUser.id && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              You
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.level}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-bold text-gray-900">{user.score.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  );
}
