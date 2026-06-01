import PersonalityCard from './PersonalityCard';

export default function PersonalitiesBento() {
  const list = [
    { name: 'النبي محمد ﷺ', title: 'خاتم الأنبياء', period: '570م - 632م', color: 'bg-emerald-900' },
    { name: 'الإمام علي (ع)', title: 'أمير المؤمنين', period: '600م - 661م', color: 'bg-gold-500' },
    { name: 'السيدة فاطمة (ع)', title: 'سيدة نساء العالمين', period: '605م - 632م', color: 'bg-rose-400' },
    { name: 'الإمام الحسين (ع)', title: 'سيد الشهداء', period: '626م - 680م', color: 'bg-red-500' },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
      <h2 className="font-display text-2xl md:text-4xl text-emerald-900 mb-4 md:mb-6 text-center">الشخصيات</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {list.map((p, i) => <div key={i} className={i === 0 ? "md:col-span-2" : ""}><PersonalityCard {...p} /></div>)}
      </div>
    </section>
  );
}