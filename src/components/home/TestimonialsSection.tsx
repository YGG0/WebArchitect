import React from 'react';
import { TESTIMONIALS_DATA } from '@/data/mockData';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
            Kepercayaan dari Pemilik Properti
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-stone-950/80 border border-stone-800 rounded-xs p-7 flex flex-col justify-between relative hover:border-amber-500/40 transition-colors"
            >
              <Quote className="w-10 h-10 text-stone-800 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author & Project */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center gap-3">
                <img
                  src={t.customerPhoto}
                  alt={t.customerName}
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/50"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">
                    {t.customerName}
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    {t.customerRole}
                  </p>
                  <p className="text-[10px] text-amber-400/90 font-medium mt-0.5">
                    Proyek: {t.projectTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

