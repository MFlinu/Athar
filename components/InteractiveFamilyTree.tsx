'use client';
import { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, Move, Info } from 'lucide-react';
import Link from 'next/link';

const FAMILY_DATA = [
  { id: 'p', name: 'محمد ﷺ', title: 'خاتم الأنبياء', x: 500, y: 80, rel: 'prophet' },
  { id: 'f', name: 'فاطمة (ع)', title: 'الزهراء', x: 500, y: 180, rel: 'woman' },
  { id: 'a', name: 'علي (ع)', title: 'أمير المؤمنين', x: 500, y: 260, rel: 'imam' },
  { id: 'h1', name: 'الحسن (ع)', title: 'المجتبى', x: 350, y: 360, rel: 'imam' },
  { id: 'h2', name: 'الحسين (ع)', title: 'سيد الشهداء', x: 500, y: 360, rel: 'imam' },
  { id: 'z', name: 'زينب (ع)', title: 'عقيلة بني هاشم', x: 650, y: 360, rel: 'woman' },
];

const CONNS = [
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }
];

export default function InteractiveFamilyTree() {
  const [scale, setScale] = useState(0.7);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) setScale(0.55);
  }, []);

  const handleDown = (e: React.PointerEvent) => { setDragging(true); setStart({ x: e.clientX - pos.x, y: e.clientY - pos.y }); };
  const handleMove = (e: React.PointerEvent) => { if (!dragging) return; setPos({ x: e.clientX - start.x, y: e.clientY - start.y }); };
  const handleUp = () => setDragging(false);

  return (
    <div className="relative w-full h-[500px] bg-white rounded-2xl md:rounded-3xl shadow-soft overflow-hidden border border-emerald-900/5">
      
      {/* ✅ أدوات التحكم: أعلى اليسار - زائدة واضحة */}
      <div className="absolute top-4 left-4 z-20 flex gap-2 p-2 bg-white/90 backdrop-blur rounded-xl shadow-md">
        <button onClick={() => setScale(s => Math.min(s + 0.2, 2))} className="p-2 rounded-lg hover:bg-emerald-50 touch-target">
          <ZoomIn className="w-5 h-5 text-emerald-900" />
        </button>
        <button onClick={() => setScale(s => Math.max(s - 0.2, 0.3))} className="p-2 rounded-lg hover:bg-emerald-50 touch-target">
          <ZoomOut className="w-5 h-5 text-emerald-900" />
        </button>
        <button onClick={() => { setPos({ x: 0, y: 0 }); setScale(0.7); }} className="p-2 rounded-lg hover:bg-emerald-50 touch-target">
          <Move className="w-5 h-5 text-emerald-900" />
        </button>
      </div>

      {/* مساحة الرسم */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none" onPointerDown={handleDown} onPointerMove={handleMove} onPointerUp={handleUp} onPointerLeave={handleUp}>
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transformOrigin: 'center center', transition: dragging ? 'none' : 'transform 0.2s' }}>
          <defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0D5C4C" strokeOpacity="0.05" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#g)" />
          {CONNS.map((c, i) => <line key={i} x1={FAMILY_DATA[c.from].x} y1={FAMILY_DATA[c.from].y} x2={FAMILY_DATA[c.to].x} y2={FAMILY_DATA[c.to].y} stroke="#0D5C4C" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />)}
          {FAMILY_DATA.map((m) => {
            const colors: any = { prophet: { f: '#0D5C4C', t: '#fff' }, imam: { f: '#fff', t: '#0D5C4C', s: '#C9A961' }, woman: { f: '#fff', t: '#9D174D', s: '#E17A87' } };
            const c = colors[m.rel];
            return (
              <g key={m.id} className="cursor-pointer hover:scale-105 transition-transform">
                <circle cx={m.x} cy={m.y} r="32" fill={c.f} stroke={c.s || '#0D5C4C'} strokeWidth="2" />
                <text x={m.x} y={m.y} textAnchor="middle" dominantBaseline="central" fill={c.t} className="font-arabic font-bold pointer-events-none" style={{ fontSize: '14px' }}>{m.name}</text>
                <text x={m.x} y={m.y + 22} textAnchor="middle" fill={c.t === '#fff' ? 'rgba(255,255,255,0.8)' : '#7A7A7A'} className="font-arabic pointer-events-none" style={{ fontSize: '10px' }}>{m.title}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ✅ الشريط الأخضر: أسفل الوسط - واضح ولا يتداخل */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-emerald-900/90 text-white px-4 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg pointer-events-none">
        <Move className="w-3 h-3" /> اسحب للتحريك • اضغط للتفاصيل
      </div>
    </div>
  );
}