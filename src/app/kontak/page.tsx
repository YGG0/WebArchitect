'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import ConsultationSection from '@/components/home/ConsultationSection';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '@/data/mockData';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Full-width Hero Banner with Image */}
        <section className="relative w-full h-[48vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-24 pb-10">
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
              alt="Hubungi Studio Arsitek SPRIO"
              className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Title in elegant cursive / script style matching Emporio */}
            <h1 className="font-script text-5xl sm:text-7xl text-[#d4af37] font-normal tracking-wide drop-shadow-lg mb-3">
              Contact Us
            </h1>
            <p className="text-stone-200 text-sm sm:text-base uppercase tracking-[0.2em] font-light drop-shadow">
              Your Partner in Perfect Villa & Architectural Creation
            </p>
          </div>
        </section>

        {/* Minimalist Contact Area (Emporio Style) */}
        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-3xl w-full mx-auto text-center space-y-10">
            {/* Big Green Pill WhatsApp Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Halo SPRIO Architect, saya ingin konsultasi mengenai desain arsitektur / villa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto min-w-[280px] bg-[#229653] hover:bg-[#1e8349] text-white font-bold text-xs uppercase tracking-[0.25em] py-4 px-14 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.03]"
              >
                WHATSAPP
              </a>
            </div>

            {/* Minimalist Contact Rows */}
            <div className="space-y-6 pt-2 text-xs sm:text-sm text-stone-700 font-light max-w-xl mx-auto">
              {/* WhatsApp Phone */}
              <div className="flex items-center justify-center gap-3">
                <span className="w-9 h-9 rounded-full border border-amber-600/40 text-amber-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-amber-600" />
                </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors tracking-wider font-normal text-sm"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-3">
                <span className="w-9 h-9 rounded-full border border-amber-600/40 text-amber-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-amber-600" />
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-amber-600 transition-colors tracking-wider font-normal text-sm"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Studio Address */}
              <div className="flex items-start justify-center gap-3 text-center">
                <span className="w-9 h-9 rounded-full border border-amber-600/40 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </span>
                <span className="leading-relaxed text-stone-600 font-normal">
                  Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190 <br className="hidden sm:inline" />
                  <span className="text-stone-500 text-xs">• Cabang Bali: Jl. Pantai Batu Bolong, Canggu</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Formulir Konsultasi Lengkap Khusus Halaman Kontak */}
        <ConsultationSection />
      </main>

      {/* Simple Minimal Footer (Emporio Style) */}
      <footer className="py-8 border-t border-stone-100 text-center text-xs text-stone-500 font-light bg-stone-50">
        <p>
          © 2026 <strong className="font-semibold text-stone-800">SPRIO Architect & Interior</strong>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
