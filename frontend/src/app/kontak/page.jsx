'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ConsultationSection from '@/components/home/ConsultationSection';
import { MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '@/data/mockData';
import { useSiteSettings } from '@/lib/useSiteSettings';

export default function ContactPage() {
    const settings = useSiteSettings();

    const waHref = settings.whatsappNumber
        ? `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent('Halo SPRIO Architect, saya ingin konsultasi mengenai desain arsitektur.')}`
        : getWhatsAppUrl('Halo SPRIO Architect, saya ingin konsultasi mengenai desain arsitektur.');

    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          {/* Full-width Hero Banner with Image */}
          <section className="relative w-full h-[48vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-24 pb-10">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
                alt="Hubungi Studio Arsitek SPRIO"
                className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-script text-5xl sm:text-7xl text-[#d4af37] font-normal tracking-wide drop-shadow-lg mb-3">
                Contact Us
              </h1>
              <p className="text-stone-200 text-sm sm:text-base uppercase tracking-[0.2em] font-light drop-shadow">
                Your Partner in Perfect Architecture &amp; Interior Creation
              </p>
            </div>
          </section>

          {/* Minimalist Contact Area */}
          <section className="py-16 sm:py-20 px-4">
            <div className="max-w-4xl w-full mx-auto text-center space-y-10">
              {/* Big Green Pill WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto min-w-[280px] bg-[#229653] hover:bg-[#1e8349] text-white font-bold text-xs uppercase tracking-[0.25em] py-4 px-14 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.03]"
                >
                  WHATSAPP
                </a>
              </div>

              {/* Minimalist Contact Rows */}
              <div className="space-y-6 pt-2 text-xs sm:text-sm text-stone-700 font-light max-w-xl mx-auto">
                {/* All WhatsApp / Phone Numbers */}
                {(settings.phones?.length ? settings.phones : [{ label: 'WhatsApp', number: settings.whatsappNumber, display: settings.whatsappDisplay }]).map((p, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3">
                    <span className="w-9 h-9 rounded-full border border-amber-600/40 text-amber-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-amber-600" />
                    </span>
                    <a
                      href={`https://wa.me/${p.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-600 transition-colors tracking-wider font-normal text-sm"
                    >
                      {p.display} {p.label ? <span className="text-xs text-stone-400">({p.label})</span> : null}
                    </a>
                  </div>
                ))}

                {/* All Emails */}
                {(settings.emails?.length ? settings.emails : [settings.email]).map((em, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3">
                    <span className="w-9 h-9 rounded-full border border-amber-600/40 text-amber-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-amber-600" />
                    </span>
                    <a
                      href={`mailto:${em}`}
                      className="hover:text-amber-600 transition-colors tracking-wider font-normal text-sm"
                    >
                      {em}
                    </a>
                  </div>
                ))}

                {/* Studio Address + Direct Google Maps Link */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex items-start justify-center gap-3">
                    <span className="w-9 h-9 rounded-full border border-amber-600/40 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-amber-600" />
                    </span>
                    <span className="leading-relaxed text-stone-600 font-normal">
                      {settings.address} <br className="hidden sm:inline" />
                      {settings.branchAddress && (
                        <span className="text-stone-500 text-xs">• {settings.branchAddress}</span>
                      )}
                    </span>
                  </div>

                  <a
                    href={settings.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Buka di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded Interactive Google Maps */}
              <div className="pt-4">
                <div className="w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
                  <iframe
                    src={settings.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Studio SPRIO Architect di Google Maps"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Formulir Konsultasi Lengkap Khusus Halaman Kontak */}
          <ConsultationSection />
        </main>

        <footer className="py-8 border-t border-stone-100 text-center text-xs text-stone-500 font-light bg-stone-50">
          <p>
            © 2026 <strong className="font-semibold text-stone-800">SPRIO Architect &amp; Interior</strong>. All rights reserved.
          </p>
        </footer>
      </div>
    );
}
