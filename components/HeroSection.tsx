import { Sparkles, ChevronLeft } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-900 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500 blur-3xl" />
      </div>
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-emerald-900/10 text-emerald-900 text-sm mb-8">
        <Sparkles className="w-4 h-4 text-gold-500" />
        <span>موسوعة رقمية موثّقة</span>
      </div>
      
      <h1 className="font-display text-5xl md:text-7xl text-emerald-900 mb-6 leading-tight">
        اكتشف سيرة <br />
        <span className="text-gold-500">خاتم الأنبياء وآل بيته</span>
      </h1>
      
      <p className="text-lg md:text-xl text-ink-700 max-w-2xl mx-auto mb-10 leading-relaxed">
        مرجع شامل وموثّق لسيرة النبي محمد ﷺ والأئمة المعصومين (ع)، 
        بأسلوب حديث وتفاعلي يجمع بين الأصالة والمعاصرة.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#personalities" className="px-8 py-4 bg-emerald-900 text-cream-50 rounded-xl font-medium hover:bg-emerald-700 transition-all shadow-soft flex items-center gap-2">
          ابدأ الرحلة
          <ChevronLeft className="w-5 h-5" />
        </a>
        <a href="#assistant" className="px-8 py-4 border border-emerald-900/20 text-emerald-900 rounded-xl font-medium hover:bg-emerald-900/5 transition-all flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold-500" />
          اسأل المساعد الذكي
        </a>
      </div>
    </section>
  );
}