'use client';
import { BookOpen, Menu, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link  href="/" className="flex items-center gap-3 group">
            <Image
              className="w-15 h-15 rounded-lg bg-cream-50/10 p-1 group-hover:bg-emerald-900/10 transition-colors"
              src="/logos/logo-compact.png"
              alt="شعار أثر - المصغر"
              width={32}
              height={32}
            />
          <span className="font-display text-2xl text-emerald-900">أثر</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-ink-700">
          <Link href="#" className="hover:text-emerald-900 transition-colors">الرئيسية</Link>
          <Link href="#personalities" className="hover:text-emerald-900 transition-colors">الشخصيات</Link>
          <Link href="#tree" className="hover:text-emerald-900 transition-colors">شجرة آل البيت</Link>
          <Link href="#assistant" className="hover:text-emerald-900 transition-colors">المساعد الذكي</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-ink-700 hover:text-emerald-900 transition-colors">
            <Globe className="w-4 h-4" />
            <span className="text-sm">EN</span>
          </button>
          <button className="md:hidden text-ink-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}