import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import PersonalitiesBento from '@/components/PersonalitiesBento';
import InteractiveFamilyTree from '@/components/InteractiveFamilyTree';
import AIAssistantSection from '@/components/AIAssistantSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 font-arabic">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <PersonalitiesBento />
      
      <section id="tree" className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <h2 className="font-display text-3xl md:text-4xl text-emerald-900 mb-6 text-center">شجرة آل البيت</h2>
        <InteractiveFamilyTree />
      </section>
      
      <AIAssistantSection />
      <Footer />
    </div>
  );
}