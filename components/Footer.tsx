import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-cream-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* 🔹 اللوقو للـ Footer */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src="/logos/logo-full.png" 
                alt="شعار أثر - الكامل" 
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
                priority={false} // لا يحتاج تحميل فوري لأنه في أسفل الصفحة
              />
              <div>
                <h3 className="font-display text-3xl text-cream-50">أثر</h3>
                <p className="text-gold-300 text-sm">موسوعة أهل البيت الرقمية</p>
              </div>
            </div>
            
            <p className="text-cream-50/70 max-w-md leading-relaxed">
              مرجع شامل وموثّق يجمع بين الأصالة التاريخية والعرض الرقمي الحديث، 
              صُمم ليكون سهل الوصول ودقيق المعلومة.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="font-medium mb-4 text-gold-300">الاستكشاف</h4>
            <ul className="space-y-2 text-cream-50/70">
              <li><Link href="/personalities" className="hover:text-gold-300 transition-colors">الشخصيات</Link></li>
              <li><Link href="/events" className="hover:text-gold-300 transition-colors">الأحداث</Link></li>
              <li><Link href="/sources" className="hover:text-gold-300 transition-colors">المصادر</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-gold-300">حول الموقع</h4>
            <ul className="space-y-2 text-cream-50/70">
              <li><Link href="/about" className="hover:text-gold-300 transition-colors">من نحن</Link></li>
              <li><Link href="/disclaimer" className="hover:text-gold-300 transition-colors">إخلاء مسؤولية</Link></li>
              <li><Link href="/contact" className="hover:text-gold-300 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-cream-50/10 text-sm text-cream-50/50 text-center">
          © {new Date().getFullYear()} أثر - جميع الحقوق محفوظة. صُنع بـ ❤️ لخدمة أهل البيت (ع)
        </div>
      </div>
    </footer>
  );
}