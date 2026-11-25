'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/common/ScrollReveal';
import { getWhatsAppUrl, PACKAGES_DATA } from '@/data/mockData';
import { ArrowLeft, Check, MessageCircle, ShieldCheck, FileCheck2, Users, ArrowRight } from 'lucide-react';
export default function PackageDetailClient({ pkg }) {
    const otherPackages = PACKAGES_DATA.filter((p) => p.id !== pkg.id);
    return (<div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Navigation Breadcrumb Bar */}
        <section className="bg-stone-900 text-stone-300 pt-24 pb-6 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/paket" className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-semibold uppercase tracking-wider transition">
              <ArrowLeft className="w-3.5 h-3.5"/> Kembali ke Daftar Paket
            </Link>

            <span className="text-xs font-mono text-stone-400">
              Paket Desain • SPRIO Architect
            </span>
          </div>
        </section>

        {/* Hero Section of Package */}
        <section className="relative bg-white py-14 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Title & Overview */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal animation="fade-up">
                  {pkg.badge && (<span className="inline-block bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
                      {pkg.badge}
                    </span>)}
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                    Paket {pkg.name}
                  </h1>
                  <p className="text-stone-600 text-base sm:text-lg leading-relaxed mt-2 font-light">
                    {pkg.tagline}
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="p-6 bg-stone-100 rounded-sm border border-stone-200 space-y-3">
                    <h3 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-600"/> Profil Pengguna Paket Ini
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {pkg.targetUser}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={250}>
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-bold text-stone-900 border-l-2 border-amber-600 pl-3">
                      Penjelasan & Gambaran Paket
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                      {pkg.description}
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Pricing & Quick WhatsApp Booking Box */}
              <div className="lg:col-span-5">
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="sticky top-28 bg-stone-900 text-white p-8 rounded-sm border border-stone-800 shadow-2xl space-y-6">
                    <div>
                      <span className="text-xs text-stone-400 uppercase tracking-widest block mb-1">
                        Estimasi Biaya Jasa Desain
                      </span>
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-400">
                        {pkg.priceLabel}
                      </div>
                      <p className="text-[11px] text-stone-400 mt-1">
                        Biaya transparan tanpa biaya tersembunyi
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-stone-800">
                      <span className="text-xs font-semibold text-stone-200 uppercase tracking-wider block">
                        Ringkasan Output:
                      </span>
                      {pkg.coverage.slice(0, 5).map((cov, idx) => (<div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"/>
                          <span>{cov}</span>
                        </div>))}
                    </div>

                    <div className="pt-4 border-t border-stone-800 space-y-3">
                      <a href={getWhatsAppUrl(pkg.waMessage)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#229653] hover:bg-[#1e8349] text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                        <MessageCircle className="w-4 h-4"/>
                        Pesan & Konsultasi Paket via WA
                      </a>
                      <p className="text-[11px] text-stone-400 text-center">
                        Format pesan otomatis tersusun saat aplikasi WhatsApp terbuka
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Deliverables: Apa Saja Jasa & Berkas Yang Didapatkan */}
        {pkg.deliverables && (<section className="py-20 bg-stone-50 border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                    Rincian Jasa & Berkas Yang Anda Dapatkan
                  </h2>
                  <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full"/>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Dengan memesan Paket {pkg.name}, berikut adalah rincian lengkap dokumen teknis dan output kerja nyata dari arsitek kami:
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pkg.deliverables.map((deliv, idx) => (<ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                    <div className="bg-white p-7 rounded-sm border border-stone-200 shadow-sm h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-sm bg-stone-900 text-amber-500 flex items-center justify-center mb-5">
                          <FileCheck2 className="w-5 h-5"/>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100">
                          {deliv.category}
                        </h3>
                        <ul className="space-y-3">
                          {deliv.items.map((item, iIdx) => (<li key={iIdx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3"/>
                              </div>
                              <span>{item}</span>
                            </li>))}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>))}
              </div>
            </div>
          </section>)}

        {/* Tahapan Kerja / Workflow */}
        {pkg.processSteps && (<section className="py-20 bg-white border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                    Tahapan Alur Kerja Paket {pkg.name}
                  </h2>
                  <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full"/>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Proses terstruktur yang kami jalankan bersama Anda hingga seluruh dokumen gambar kerja selesai sempurna.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {pkg.processSteps.map((step, sIdx) => (<ScrollReveal key={sIdx} animation="fade-up" delay={sIdx * 80}>
                    <div className="bg-stone-50 p-6 rounded-sm border border-stone-200 relative h-full">
                      <div className="font-serif text-3xl font-bold text-amber-600/40 mb-2">
                        0{sIdx + 1}
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-900 mb-2">
                        Tahap {sIdx + 1}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </ScrollReveal>))}
              </div>
            </div>
          </section>)}

        {/* Format Serah Terima Dokumen (Deliverables Media) */}
        {pkg.sampleIncludes && (<section className="py-16 bg-stone-900 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
              <ScrollReveal animation="fade-up">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Format Penyerahan Dokumen Kepada Anda
                </h3>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-6 rounded-full"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                  {pkg.sampleIncludes.map((inc, i) => (<div key={i} className="flex items-center gap-3 p-4 bg-stone-800/80 rounded-xs border border-stone-700">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0"/>
                      <span className="text-xs text-stone-200">{inc}</span>
                    </div>))}
                </div>

                <div className="pt-6">
                  <a href={getWhatsAppUrl(pkg.waMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#229653] hover:bg-[#1e8349] text-white text-xs font-bold uppercase tracking-wider py-4 px-10 rounded-sm transition-all shadow-lg hover:scale-105">
                    <MessageCircle className="w-4 h-4"/>
                    Mulai Konsultasi Paket {pkg.name} via WA
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </section>)}

        {/* Pilihan Paket Lainnya */}
        <section className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Lihat Pilihan Paket Lainnya
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Bandingkan dengan paket lain sesuai cakupan kebutuhan proyek Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPackages.slice(0, 3).map((other) => (<div key={other.id} className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-stone-900">
                      Paket {other.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 mb-4">
                      {other.tagline}
                    </p>
                    <div className="font-serif text-lg font-bold text-amber-600 mb-4">
                      {other.priceLabel}
                    </div>
                  </div>
                  <Link href={`/paket/${other.id}`} className="inline-flex items-center justify-between text-xs font-semibold text-stone-900 hover:text-amber-600 border-t border-stone-100 pt-3 transition-colors">
                    <span>Lihat Rincian Jasa Paket</span>
                    <ArrowRight className="w-3.5 h-3.5"/>
                  </Link>
                </div>))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
