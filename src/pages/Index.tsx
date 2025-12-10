import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CommandsSection from '@/components/CommandsSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CommandsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
