'use client';
import { TreePine, ChevronLeft } from 'lucide-react';

export default function FamilyTreeSection() {
  return (
    <section id="tree" className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-700 p-12 md:p-20 text-center text-cream-50">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative">
          <TreePine className="w-12 h-12 text-gold-300 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl mb-4">شجرة آل البيت</h2>
          <p className="text-cream-50/80 text-lg mb-8 max-w-2xl mx-auto">
            استعرض العلاقات والروابط بين أهل البيت (ع) بشكل تفاعلي
          </p>
          <button className="px-8 py-4 bg-gold-500 text-emerald-900 rounded-xl font-medium hover:bg-gold-300 transition-all inline-flex items-center gap-2">
            استكشف الشجرة
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}