'use client';
import React from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { useSiteSettings } from '@/lib/useSiteSettings';
export default function Footer() {
    const settings = useSiteSettings();
    const phonesList = settings.phones?.length ? settings.phones : [{ label: 'WhatsApp Hotline', number: settings.whatsappNumber, display: settings.whatsappDisplay }];
    const emailsList = settings.emails?.length ? settings.emails : [settings.email];
    const primaryWa = phonesList[0]?.number || settings.whatsappNumber;
    const primaryEmail = emailsList[0] || settings.email;
    return (<footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-14 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-sm bg-amber-600 flex items-center justify-center text-white shadow-sm">
                <Building2 className="w-6 h-6"/>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  SPRIO<span className="text-amber-500">.</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 font-medium -mt-1">
                  Architect &amp; Interior
                </span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Biro konsultan arsitektur dan desain interior terkemuka di Indonesia. Menghadirkan mahakarya desain hunian mewah, villa tropis, dan bangunan komersial berstandar internasional.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-sm bg-stone-900 flex items-center justify-center text-stone-300 hover:text-white hover:bg-amber-600 transition-colors" title="Website Resmi">
                <Globe className="w-4 h-4"/>
              </a>
              <a href={`https://wa.me/${primaryWa}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-sm bg-stone-900 flex items-center justify-center text-stone-300 hover:text-white hover:bg-amber-600 transition-colors" title="Hotline WhatsApp">
                <Phone className="w-4 h-4"/>
              </a>
              <a href={`mailto:${primaryEmail}`} className="w-9 h-9 rounded-sm bg-stone-900 flex items-center justify-center text-stone-300 hover:text-white hover:bg-amber-600 transition-colors" title="Email Studio">
                <Mail className="w-4 h-4"/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-amber-500">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500"/> Galeri Portofolio Proyek
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500"/> Jasa Desain Arsitektur
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500"/> Desain Interior &amp; Fit-Out
                </Link>
              </li>
              <li>
                <Link href="/paket" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500"/> Pilihan Paket Desain &amp; Biaya
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500"/> Profil &amp; Tim Arsitek
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500"/> Form Konsultasi &amp; Penawaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Gaya Desain */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-amber-500">
              Gaya Desain
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>• Desain Rumah Modern Tropis</li>
              <li>• Rumah Klasik Mewah (Classic European)</li>
              <li>• Desain Villa &amp; Resort Bali</li>
              <li>• Hunian Mediterania Elegan</li>
              <li>• Desain Kantor &amp; Cafe Industrial</li>
              <li>• Minimalis Kontemporer Efisien</li>
            </ul>
          </div>

          {/* Kontak & Studio */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-amber-500">
              Kantor &amp; Studio
            </h3>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1"/>
                <span>{settings.address}</span>
              </div>
              {phonesList.map((p, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0"/>
                  <a href={`https://wa.me/${p.number}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    {p.display} {p.label ? `(${p.label})` : ''}
                  </a>
                </div>
              ))}
              {emailsList.map((em, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0"/>
                  <a href={`mailto:${em}`} className="hover:text-amber-400 transition-colors">{em}</a>
                </div>
              ))}
              <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500"/>
                <span>Terdaftar &amp; Berlisensi Ikatan Arsitek Indonesia (IAI)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>© 2026 SPRIO Architect &amp; Interior. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center space-x-6">
            <Link href="/admin" className="hover:text-stone-300 transition-colors">
              Staff Portal
            </Link>
            <span className="hover:text-stone-300">Kebijakan Privasi</span>
            <span className="hover:text-stone-300">Syarat &amp; Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>);
}
