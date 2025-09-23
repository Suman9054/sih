import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Zap } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const ChallengeSystem = () => {
  const challenges = [
    {
      type: "Daily",
      title: "Plastic-Free Day Challenge",
      description: "Learn about alternatives to single-use plastics",
      participants: 1205,
      reward: "50 Eco Points",
      difficulty: "Easy",
      timeLeft: "6h 30m",
      icon: Calendar
    },
    {
      type: "Weekly", 
      title: "Western Ghats Biodiversity Quiz",
      description: "Test your knowledge about this UNESCO World Heritage site",
      participants: 856,
      reward: "200 Eco Points + Badge",
      difficulty: "Medium",
      timeLeft: "3d 12h",
      icon: Trophy
    },
    {
      type: "Community",
      title: "River Conservation Project",
      description: "Collaborate with others to solve water pollution cases",
      participants: 2340,
      reward: "500 Eco Points",
      difficulty: "Hard", 
      timeLeft: "2 weeks",
      icon: Users
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-nature text-white";
      case "Medium": return "bg-ocean text-white";
      case "Hard": return "bg-earth text-white";
      default: return "bg-muted";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Daily": return "text-nature border-nature";
      case "Weekly": return "text-ocean border-ocean";
      case "Community": return "text-earth border-earth";
      default: return "text-muted border-muted";
    }
  };

  const navigation = useNavigate();
  return (
    <section id="challenges" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-nature">Environmental Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Take on daily, weekly, and community challenges to boost your eco-knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <Card key={index} className="hover:shadow-[var(--shadow-nature)] transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={getTypeColor(challenge.type)}>
                      <IconComponent className="h-3 w-3 mr-1" />
                      {challenge.type}
                    </Badge>
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      <Users className="h-4 w-4 inline mr-1" />
                      {challenge.participants.toLocaleString()} participating
                    </span>
                    <span className="text-nature font-medium">
                      <Zap className="h-4 w-4 inline mr-1" />
                      {challenge.reward}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      ⏰ {challenge.timeLeft} left
                    </span>
                    <Button size="sm" variant="nature">
                      Join Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-nature text-nature hover:bg-nature-light" onClick={() => navigation({to: '/challenges'})}>
            View All Challenges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSystem;