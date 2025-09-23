import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StateSelection from "@/components/StateSelection";
import ChallengeSystem from "@/components/ChallengeSystem";
import FeedbackSection from "@/components/FeedbackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StateSelection />
        <ChallengeSystem />
        <FeedbackSection />
      </main>
      
      <footer className="bg-muted/50 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 EcoLearn India. Empowering environmental education through gamification.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;