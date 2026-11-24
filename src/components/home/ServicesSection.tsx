import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/mockData';
import { 
  Building2, 
  LayoutGrid, 
  Eye, 
  Compass, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-7 h-7" />,
  LayoutGrid: <LayoutGrid className="w-7 h-7" />,
  Eye: <Eye className="w-7 h-7" />,
  Compass: <Compass className="w-7 h-7" />,
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Sprio Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Solusi Arsitektur & Interior Komprehensif
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-stone-600 text-sm leading-relaxed">
            Dari perencanaan konsep denah hingga pengawasan estetika interior, kami menyediakan pendampingan profesional untuk mewujudkan hunian yang berkarakter dan bernilai investasi tinggi.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-sm border border-stone-200 p-7 flex flex-col justify-between hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-sm bg-stone-900 text-amber-500 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                  {iconMap[srv.iconName] || <Building2 className="w-7 h-7" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-3">
                  {srv.title}
                </h3>

                {/* Short Desc */}
                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  {srv.shortDesc}
                </p>

                {/* Features Bullet */}
                <ul className="space-y-2.5 mb-6 text-xs text-stone-700">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-stone-100 mt-auto">
                <Link
                  href="/layanan"
                  className="text-xs font-semibold text-stone-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors"
                >
                  Pelajari Rincian Layanan <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

