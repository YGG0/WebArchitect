'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SERVICES_DATA } from '@/data/mockData';
import { Building2, LayoutGrid, Eye, Compass, CheckCircle2, Sparkles } from 'lucide-react';
const iconMap = {
    Building2: <Building2 className="w-8 h-8"/>,
    LayoutGrid: <LayoutGrid className="w-8 h-8"/>,
    Eye: <Eye className="w-8 h-8"/>,
    Compass: <Compass className="w-8 h-8"/>,
};
export default function ServicesPage() {
    return (<div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Full-width Hero Banner with Image */}
        <section className="relative w-full h-[52vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-24 pb-12">
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=85" alt="Layanan Arsitektur & Desain" className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.05]"/>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"/>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
              Layanan Desain Arsitektur & Interior
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
              Kami menyajikan layanan arsitektur end-to-end dengan standar presisi tinggi, mengintegrasikan estetika visual kontemporer, kenyamanan tata ruang, serta efisiensi anggaran konstruksi.
            </p>
          </div>
        </section>

        {/* Detailed Services Listing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {SERVICES_DATA.map((srv, idx) => (<div key={srv.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] rounded-xs overflow-hidden shadow-xl border border-stone-200 group">
                    <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute inset-0 bg-stone-900/10"/>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 rounded-xs bg-stone-900 text-amber-500 flex items-center justify-center">
                    {iconMap[srv.iconName]}
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                      {srv.title}
                    </h2>
                    <div className="w-12 h-1 bg-amber-500 mt-3 rounded-full"/>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                      Cakupan Pekerjaan yang Anda Dapatkan:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.features.map((feat, fIdx) => (<div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"/>
                          <span>{feat}</span>
                        </div>))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href="#konsultasi" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xs transition-colors">
                      <Sparkles className="w-4 h-4 text-amber-400"/>
                      Konsultasikan Kebutuhan Ini
                    </a>
                  </div>
                </div>
              </div>))}
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
