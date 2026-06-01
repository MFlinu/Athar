import { ChevronLeft } from 'lucide-react';
import PersonalityCard from './PersonalityCard';

export default function PersonalitiesBento() {
  const personalities = [
    { name: 'النبي محمد ﷺ', title: 'خاتم الأنبياء', period: '570م - 632م', color: 'bg-emerald-900 text-emerald-900', featured: true },
    { name: 'الإمام علي (ع)', title: 'أمير المؤمنين', period: '600م - 661م', color: 'bg-gold-500 text-gold-500' },
    { name: 'السيدة فاطمة (ع)', title: 'سيدة نساء العالمين', period: '605م - 632م', color: 'bg-rose-400 text-rose-500' },
    { name: 'الإمام الحسن (ع)', title: 'المجتبى', period: '625م - 670م', color: 'bg-emerald-500 text-emerald-600' },
    { name: 'الإمام الحسين (ع)', title: 'سيد الشهداء', period: '626م - 680م', color: 'bg-red-500 text-red-600' },
    { name: 'الإمام المهدي (عج)', title: 'صاحب الزمان', period: '869م - حتى الآن', color: 'bg-indigo-500 text-indigo-600' },
  ];

  return (
    <section id="personalities" className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-emerald-900 mb-3">الشخصيات</h2>
          <p className="text-ink-700 text-lg">تعرف على سيرة أهل البيت (ع) ومنجزاتهم</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-emerald-900 font-medium hover:text-emerald-700 transition-colors">
          عرض الكل
          <ChevronLeft className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personalities.map((p, i) => (
          <PersonalityCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}