import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import PersonalitiesBento from '@/components/PersonalitiesBento';
import AIAssistantSection from '@/components/AIAssistantSection';
import Footer from '@/components/Footer';
import InteractiveFamilyTree from '@/components/InteractiveFamilyTree';

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-cream-50 font-arabic">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <PersonalitiesBento />
      <section id="tree" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl text-emerald-900 mb-3">شجرة آل البيت</h2>
          <p className="text-ink-700">استكشف العلاقات العائلية بشكل تفاعلي</p>
        </div>
        
        <InteractiveFamilyTree />
      </section>
      <AIAssistantSection />
      <Footer />
    </div>
  );
}