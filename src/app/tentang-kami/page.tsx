'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Building2, 
  Award, 
  Compass, 
  Users, 
  Target, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Full-width Hero Banner with Image */}
        <section className="relative w-full h-[52vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-24 pb-12">
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
              alt="Studio Arsitek SPRIO"
              className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
              Tentang SPRIO Architect & Interior
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
              Mendedikasikan diri selama lebih dari 15 tahun dalam menciptakan karya arsitektur hunian yang memadukan keindahan proporsi klasik dan kemurnian desain modern tropis.
            </p>
          </div>
        </section>

        {/* Company Narrative & Vision Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
                    Arsitektur Bukan Sekadar Bangunan, Melainkan Ruang Jiwa & Kehidupan
                  </h2>
                  <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">
                  Berdiri sejak tahun 2009, SPRIO Architect berkembang menjadi salah satu biro perancang arsitektur premium di Indonesia. Kami percaya bahwa setiap keluarga memiliki kebiasaan, ritme kehidupan, dan cita rasa estetika yang unik.
                </p>

                <p className="text-stone-600 text-sm leading-relaxed">
                  Oleh karena itu, setiap garis desain yang kami torehkan selalu diawali dengan pemahaman mendalam atas kepribadian pemilik rumah, analisis orientasi matahari, serta sirkulasi angin alami tropis Indonesia.
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-stone-900">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" /> Lisensi IAI Resmi
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-600" /> Standar Mutu Desain
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] rounded-xs overflow-hidden shadow-2xl border border-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Architecture Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-stone-200">
              <div className="p-8 bg-stone-50 rounded-xs border border-stone-200 space-y-3">
                <div className="w-12 h-12 rounded-xs bg-stone-900 text-amber-500 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Visi Perusahaan
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Menjadi biro konsultan arsitektur dan desain interior terkemuka di Asia Tenggara yang diakui atas inovasi keanggunan tropis kontemporer dan standar dokumen teknis yang presisi.
                </p>
              </div>

              <div className="p-8 bg-stone-50 rounded-xs border border-stone-200 space-y-3">
                <div className="w-12 h-12 rounded-xs bg-stone-900 text-amber-500 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Misi Kami
                </h3>
                <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                  <li>• Menghadirkan solusi arsitektur kustom yang fungsional, tahan lama, dan berestetika tinggi.</li>
                  <li>• Memberikan kepastian anggaran kepada klien melalui dokumen RAB dan gambar kerja yang komprehensif.</li>
                  <li>• Memanfaatkan teknologi visualisasi 3D mutakhir untuk mempermudah pemahaman klien sebelum konstruksi.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
