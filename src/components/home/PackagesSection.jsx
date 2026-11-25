'use client';
import React from 'react';
import Link from 'next/link';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA, getWhatsAppUrl } from '@/data/mockData';
export default function PackagesSection() {
    return (<section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative architectural background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Pilihan Paket Desain Arsitektur & Interior
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"/>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Terinspirasi dari standar transparansi studio arsitektur terkemuka. Pilih paket yang sesuai dengan rencana hunian Anda dan pesan secara instan melalui WhatsApp resmi kami.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg) => (<div key={pkg.id} className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${pkg.highlight
                ? 'bg-stone-800/90 border-2 border-amber-500 shadow-2xl shadow-amber-950/40 lg:-translate-y-2'
                : 'bg-stone-950/80 border border-stone-800 hover:border-stone-700 hover:bg-stone-800/40'}`}>
              {/* Badge if featured */}
              {pkg.badge && (<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>)}

              <div>
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    Paket {pkg.name}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-stone-800">
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block mb-1">
                    Estimasi Biaya Desain
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                    {pkg.priceLabel}
                  </span>
                </div>

                {/* Coverage checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold text-stone-300 uppercase tracking-wider block">
                    Cakupan Layanan:
                  </span>
                  {pkg.coverage.map((item, idx) => (<div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400"/>
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>))}
                </div>
              </div>

              {/* Card Actions: Masuk ke Halaman Paket & Konsultasi WA */}
              <div className="pt-4 border-t border-stone-800/60 space-y-2.5">
                <Link href={`/paket/${pkg.id}`} className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${pkg.highlight
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-950/50 hover:scale-[1.02]'
                : 'bg-stone-800 hover:bg-amber-600 text-white border border-stone-700 hover:border-amber-500 hover:scale-[1.02]'}`}>
                  <span>Lihat Rincian Jasa Paket</span>
                  <ArrowRight className="w-3.5 h-3.5"/>
                </Link>

                <a href={getWhatsAppUrl(pkg.waMessage)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-sm text-[11px] font-medium text-emerald-400 hover:text-emerald-300 bg-stone-900/60 hover:bg-stone-800 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5"/>
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>))}
        </div>

        {/* Bottom CTA to Full Comparison Table */}
        <div className="mt-14 pt-8 border-t border-stone-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-serif font-semibold text-base">
              Ingin membandingkan seluruh fasilitas paket secara berdampingan?
            </h4>
            <p className="text-xs text-stone-400">
              Lihat tabel spesifikasi perbandingan gambar kerja 2D, 3D render, RAB, dan tahapan revisi.
            </p>
          </div>
          <Link href="/paket" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all shadow-md hover:shadow-lg">
            Buka Tabel Perbandingan Paket <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>
      </div>
    </section>);
}
