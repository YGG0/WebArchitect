'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/mockData';
import { useSiteSettings } from '@/lib/useSiteSettings';

export default function Hero() {
    const settings = useSiteSettings();

    const scrollToContent = () => {
        const el = document.getElementById('featured-portfolio');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const waHref = settings.whatsappNumber
        ? `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent('Halo SPRIO Architect, saya ingin konsultasi desain arsitektur / interior impian saya.')}`
        : getWhatsAppUrl('Halo SPRIO Architect, saya ingin konsultasi desain arsitektur / interior impian saya.');

    return (
      <section className="relative w-full h-[92vh] sm:h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img
            src={settings.heroImage}
            alt={settings.heroTitle}
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.04] transition-transform duration-1000 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#d4af37] font-normal tracking-wide drop-shadow-lg select-none leading-tight">
            {settings.heroTitle}
          </h1>

          <p className="text-white/95 text-sm sm:text-lg lg:text-xl font-light tracking-[0.2em] uppercase max-w-3xl drop-shadow-md">
            {settings.heroSubtitle}
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#229653] hover:bg-[#1e8349] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-105"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          aria-label="Scroll ke Portofolio"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white flex flex-col items-center gap-1.5 transition-all animate-bounce cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-light text-stone-300">
            Scroll Down
          </span>
          <ChevronDown className="w-5 h-5 text-[#d4af37]" />
        </button>
      </section>
    );
}
