import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { PlayCircle, Target } from "lucide-react";
import gif from "/Frosty!.gif"
const HeroSection = () => {
  const navigation = useNavigate();
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nature-light via-background to-ocean-light opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nature via-nature-dark to-ocean bg-clip-text text-transparent">
              Learn Environmental Science
            </span>
            <br />
            <span className="text-foreground">Through Gaming</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore India's diverse ecosystems, tackle environmental challenges, 
            and become a guardian of nature through our interactive learning platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg" className="text-lg px-8">
              <PlayCircle className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-nature text-nature hover:bg-nature-light"
            onClick={() => navigation({to: '/challenges'})}
            >
              <Target className="h-5 w-5 mr-2" />
              View Challenges
            </Button>
            <div className="right-0">
               <img src={gif} alt="gif" style={{
                backgroundColor: "transparent", /* Ensure parent background shows */
                mixBlendMode: "multiply"
              }} className="h-50"/>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-nature">28</div>
              <div className="text-sm text-muted-foreground">States Covered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-ocean">500+</div>
              <div className="text-sm text-muted-foreground">Challenges</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-earth">10K+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div className="p-4  gap-2">
              <div className="text-3xl font-bold text-nature">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;