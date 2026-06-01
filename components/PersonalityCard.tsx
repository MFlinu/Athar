import { ChevronLeft } from 'lucide-react';

interface PersonalityCardProps {
  name: string;
  title: string;
  period: string;
  color: string;
  featured?: boolean;
}

export default function PersonalityCard({ name, title, period, color, featured = false }: PersonalityCardProps) {
  return (
    <div className={`group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 cursor-pointer border border-emerald-900/5 hover:border-gold-500/30 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`absolute top-0 right-0 w-full h-1.5 ${color}`} />
      
      <div className={`p-8 ${featured ? 'min-h-[400px]' : 'min-h-[280px]'} flex flex-col justify-between`}>
        <div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${color} bg-opacity-10`}>
            {title}
          </div>
          <h3 className={`font-display text-ink-900 mb-2 ${featured ? 'text-4xl' : 'text-2xl'}`}>
            {name}
          </h3>
          <p className="text-ink-500 text-sm">{period}</p>
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-emerald-900/5">
          <span className="text-sm text-emerald-900 font-medium">استكشف السيرة</span>
          <ChevronLeft className="w-5 h-5 text-emerald-900 group-hover:-translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}