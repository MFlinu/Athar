'use client';
import { Search } from 'lucide-react';

export default function SearchSection() {
  const tags = ['الإمام علي (ع)', 'السيدة فاطمة (ع)', 'غدير خم', 'كربلاء', 'الزوجات'];
  
  return (
    <section className="max-w-4xl mx-auto px-6 mb-16">
      <div className="relative">
        <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-ink-500" />
        </div>
        <input
          type="text"
          placeholder="ابحث عن شخصية، حدث، أو مصطلح..."
          className="w-full pr-14 pl-6 py-5 bg-white border border-emerald-900/10 rounded-2xl text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900/30 shadow-soft transition-all"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {tags.map((tag) => (
          <button key={tag} className="px-4 py-1.5 text-sm bg-white border border-emerald-900/10 rounded-full text-ink-700 hover:border-emerald-900/30 hover:text-emerald-900 transition-all">
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}