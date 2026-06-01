'use client';

import { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, Move, Info } from 'lucide-react';
import Link from 'next/link';

// نوع بيانات الشخصية
interface FamilyMember {
  id: string;
  name: string;
  title: string;
  relation: 'prophet' | 'imam' | 'woman' | 'other';
  x: number; // موقع أفقي في الشجرة
  y: number; // موقع عمودي
  children?: string[]; // IDs of children
  spouseId?: string;
}

// بيانات تجريبية (سيتم استبدالها ببيانات من Backend لاحقاً)
const FAMILY_DATA: Record<string, FamilyMember> = {
  'prophet': {
    id: 'prophet',
    name: 'محمد ﷺ',
    title: 'خاتم الأنبياء',
    relation: 'prophet',
    x: 500, y: 50,
    children: ['fatimah']
  },
  'ali': {
    id: 'ali',
    name: 'علي (ع)',
    title: 'أمير المؤمنين',
    relation: 'imam',
    x: 500, y: 200,
    spouseId: 'fatimah',
    children: ['hasan', 'hussein', 'zainab']
  },
  'fatimah': {
    id: 'fatimah',
    name: 'فاطمة (ع)',
    title: 'الزهراء',
    relation: 'woman',
    x: 500, y: 125, // موقع وسيط بين النبي والإمام علي
    children: []
  },
  'hasan': {
    id: 'hasan',
    name: 'الحسن (ع)',
    title: 'المجتبى',
    relation: 'imam',
    x: 350, y: 350,
  },
  'hussein': {
    id: 'hussein',
    name: 'الحسين (ع)',
    title: 'سيد الشهداء',
    relation: 'imam',
    x: 500, y: 350,
  },
  'zainab': {
    id: 'zainab',
    name: 'زينب (ع)',
    title: 'عقيلة بني هاشم',
    relation: 'woman',
    x: 650, y: 350,
  },
  // ... يمكن إضافة باقي الأئمة هنا بنفس النمط
};

// مكون العقدة (الشخصية) في الشجرة
const FamilyNode = ({ member, onClick }: { member: FamilyMember; onClick: (id: string) => void }) => {
  // ألوان حسب نوع العلاقة
  const colors = {
    prophet: 'stroke-emerald-900 fill-emerald-900 text-cream-50',
    imam: 'stroke-gold-500 fill-white text-emerald-900',
    woman: 'stroke-rose-400 fill-white text-rose-600',
    other: 'stroke-ink-500 fill-white text-ink-700',
  };

  return (
    <g 
      className="cursor-pointer transition-transform hover:scale-105"
      onClick={() => onClick(member.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(member.id)}
    >
      {/* دائرة الشخصية */}
      <circle
        cx={member.x}
        cy={member.y}
        r="35"
        className={`${colors[member.relation]} stroke-2 transition-all`}
      />
      
      {/* اسم الشخصية */}
      <text
        x={member.x}
        y={member.y + 55}
        textAnchor="middle"
        className="fill-ink-900 text-xs font-arabic font-medium pointer-events-none select-none"
      >
        {member.name}
      </text>
      
      {/* اللقب (يظهر عند التكبير أو الهوفر) */}
      <text
        x={member.x}
        y={member.y + 70}
        textAnchor="middle"
        className="fill-ink-500 text-[10px] font-arabic pointer-events-none select-none opacity-70"
      >
        {member.title}
      </text>
    </g>
  );
};

// مكون خط العلاقة
const ConnectionLine = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    className="stroke-emerald-900/30 stroke-1"
    strokeDasharray="4 4"
  />
);

export default function InteractiveFamilyTree() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // دالة التكبير/التصغير
  const handleZoom = (factor: number) => {
    setScale(prev => Math.min(Math.max(prev * factor, 0.5), 3)); // حد أدنى 0.5 وأقصى 3
  };

  // دالة السحب (Pan) للماوس واللمس
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setStartPos({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setPosition({ x: clientX - startPos.x, y: clientY - startPos.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  // منع السحب الافتراضي للصور والنصوص داخل الـ SVG
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    const container = containerRef.current;
    container?.addEventListener('touchmove', preventDefault, { passive: false });
    return () => container?.removeEventListener('touchmove', preventDefault);
  }, []);

  // حساب خطوط العلاقات ديناميكياً
  const connections = Object.values(FAMILY_DATA).flatMap(member => 
  member.children?.map(childId => {
    const child = FAMILY_DATA[childId];
    return child ? { from: member, to: child } : null;
  }).filter((conn): conn is { from: FamilyMember; to: FamilyMember } => conn !== null) || []
  );

  return (
    <div className="relative w-full h-[600px] bg-white rounded-3xl shadow-soft overflow-hidden border border-emerald-900/5">
      
      {/* شريط الأدوات (التحكم) */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <button 
          onClick={() => handleZoom(1.2)}
          className="p-2 bg-white rounded-lg shadow-md text-emerald-900 hover:bg-emerald-50 transition-colors"
          aria-label="تكبير"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button 
          onClick={() => handleZoom(0.8)}
          className="p-2 bg-white rounded-lg shadow-md text-emerald-900 hover:bg-emerald-50 transition-colors"
          aria-label="تصغير"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button 
          onClick={() => { setPosition({ x: 0, y: 0 }); setScale(1); }}
          className="p-2 bg-white rounded-lg shadow-md text-emerald-900 hover:bg-emerald-50 transition-colors"
          aria-label="إعادة تعيين"
        >
          <Move className="w-5 h-5" />
        </button>
      </div>

      {/* مساحة الرسم (SVG Canvas) */}
      <div 
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <svg 
          className="w-full h-full"
          viewBox="0 0 1000 600"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {/* خلفية الشبكة (Grid Pattern) */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0D5C4C" strokeOpacity="0.05" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* رسم خطوط العلاقات أولاً (لتكون خلف الشخصيات) */}
          {connections.map((conn, i) => (
            <ConnectionLine 
              key={i}
              x1={conn.from.x} y1={conn.from.y}
              x2={conn.to.x} y2={conn.to.y}
            />
          ))}

          {/* رسم الشخصيات */}
          {Object.values(FAMILY_DATA).map(member => (
            <FamilyNode 
              key={member.id} 
              member={member} 
              onClick={setSelectedMember} 
            />
          ))}
        </svg>
      </div>

      {/* نافذة التفاصيل المنبثقة (Modal) - تظهر عند النقر */}
      {selectedMember && (
        <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-4">
              <h3 className="font-display text-2xl text-emerald-900 mb-1">
                {FAMILY_DATA[selectedMember].name}
              </h3>
              <p className="text-gold-500 font-medium">{FAMILY_DATA[selectedMember].title}</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-500">الفترة الزمنية</span>
                <span className="text-ink-900 font-medium">600م - 661م</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-500">مكان الميلاد</span>
                <span className="text-ink-900 font-medium">مكة المكرمة</span>
              </div>
            </div>

            <Link 
              href={`/personality/${selectedMember}`}
              className="block w-full py-3 bg-emerald-900 text-cream-50 rounded-xl text-center font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              onClick={() => setSelectedMember(null)}
            >
              <Info className="w-4 h-4" />
              عرض السيرة الكاملة
            </Link>
            
            <button 
              onClick={() => setSelectedMember(null)}
              className="mt-3 w-full py-2 text-ink-500 hover:text-emerald-900 text-sm transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* تلميح للمستخدم (لأجهزة اللمس) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cream-50/90 backdrop-blur px-4 py-2 rounded-full text-xs text-ink-500 flex items-center gap-2 shadow-sm border border-emerald-900/5">
        <Move className="w-3 h-3" />
        <span>اسحب للتحريك • اضغط للتفاصيل</span>
      </div>
    </div>
  );
}