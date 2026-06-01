'use client';
import { BookOpen, Quote, Sparkles } from 'lucide-react';

export default function AIAssistantSection() {
  return (
    <section id="assistant" className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-900 to-gold-500 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-7 h-7 text-cream-50" />
          </div>
          <div>
            <h2 className="font-display text-3xl text-emerald-900 mb-2">اسأل المساعد الذكي</h2>
            <p className="text-ink-700">مساعد ذكي مدرّب على مصادر موثوقة عن أهل البيت (ع)</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-8 p-6 bg-cream-50 rounded-2xl">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-900/10 flex items-center justify-center flex-shrink-0">
              <Quote className="w-4 h-4 text-emerald-900" />
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm max-w-md">
              <p className="text-ink-900">ما هي أهم مناقب الإمام علي (ع) في المصادر الموثوقة؟</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-gold-500" />
            </div>
            <div className="bg-emerald-900 text-cream-50 p-4 rounded-2xl max-w-lg">
              <p className="mb-2">ذكر الشيخ المفيد في كتاب "الإرشاد" عدة مناقب...</p>
              <div className="text-xs text-gold-300 flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>مصدر موثق</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="اكتب سؤالك هنا..."
            className="w-full pr-6 pl-16 py-4 bg-cream-50 rounded-2xl text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-emerald-900/20"
          />
          <button className="absolute left-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-emerald-900 text-cream-50 rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors">
            إرسال
          </button>
        </div>
      </div>
    </section>
  );
}