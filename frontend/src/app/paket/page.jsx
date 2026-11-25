'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/common/ScrollReveal';
import { Check, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA, getWhatsAppUrl, COMPANY_INFO } from '@/data/mockData';
import { useSiteSettings } from '@/lib/useSiteSettings';
export default function PaketPage() {
    const settings = useSiteSettings();
    const faqs = [
        {
            q: 'Bagaimana cara memesan paket desain arsitektur melalui WhatsApp?',
            a: 'Sangat mudah! Pilih salah satu paket desain yang paling sesuai dengan kebutuhan Anda, lalu klik tombol "Pesan via WhatsApp". Aplikasi WhatsApp Anda akan langsung terbuka dengan template pesan pemesanan otomatis. Arsitek kami akan segera menyapa dan memandu pengumpulan data seperti ukuran lahan, kebutuhan jumlah kamar, dan gaya arsitektur yang disukai.'
        },
        {
            q: 'Apakah harga paket sudah termasuk gambar kerja konstruksi lengkap?',
            a: 'Ya, mulai dari Paket Basic ke atas, Anda mendapatkan dokumen gambar kerja arsitektur lengkap, gambar struktur beton/baja, serta gambar instalasi Mekanikal, Elektrikal, dan Plumbing (MEP) yang sudah memenuhi standar izin PBG/IMB dan siap diserahkan ke kontraktor pelaksana.'
        },
        {
            q: 'Bagaimana jika luas bangunan saya berbeda dari batas maksimal paket?',
            a: 'Estimasi harga paket di atas dihitung berdasarkan rata-rata luas bangunan standar. Jika proyek Anda memiliki luas yang berbeda atau tanah dengan kontur khusus, tim kami akan memberikan penyesuaian biaya secara transparan saat konsultasi via WhatsApp.'
        },
        {
            q: 'Apakah SPRIO melayani konsultasi dan desain untuk klien luar kota / luar pulau?',
            a: 'Tentu saja! Lebih dari 60% klien kami berasal dari berbagai kota di Indonesia (Jakarta, Bali, Surabaya, Medan, Balikpapan, Makassar, dll). Kami menjalankan konsultasi secara rutin melalui video conference (Zoom / Google Meet) serta pengiriman progress desain berkala via grup WhatsApp khusus proyek Anda.'
        }
    ];
    return (<div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Full-width Hero Banner with Image */}
        <section className="relative w-full h-[52vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-24 pb-12">
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 z-0">
            <img src={settings.paketBannerImage} alt="Paket Desain Arsitektur" className="w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.05]"/>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"/>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
              {settings.paketTitle}
            </h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-5"/>
            <p className="max-w-3xl mx-auto text-stone-200 text-sm sm:text-base leading-relaxed font-light drop-shadow">
              {settings.paketDesc}
            </p>
          </div>
        </section>

        {/* Packages Cards Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {PACKAGES_DATA.map((pkg, pIdx) => (<ScrollReveal key={pkg.id} animation="fade-up" delay={pIdx * 120} duration={750} className="h-full">
                  <div className={`relative rounded-sm p-8 flex flex-col justify-between h-full transition-all duration-300 ${pkg.highlight
                ? 'bg-stone-900 text-white border-2 border-amber-500 shadow-2xl shadow-amber-950/40 lg:-translate-y-2'
                : 'bg-white text-stone-900 border border-stone-200 shadow-sm hover:shadow-xl'}`}>
                    {/* Badge */}
                    {pkg.badge && (<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                        {pkg.badge}
                      </div>)}

                    <div>
                      <div className="mb-4">
                        <h3 className="font-serif text-2xl font-bold mb-1">
                          Paket {pkg.name}
                        </h3>
                        <p className={`text-xs ${pkg.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                          {pkg.tagline}
                        </p>
                      </div>

                      <div className={`mb-6 pb-6 border-b ${pkg.highlight ? 'border-stone-800' : 'border-stone-100'}`}>
                        <span className={`text-[11px] uppercase tracking-wider block mb-1 ${pkg.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                          Estimasi Biaya
                        </span>
                        <span className={`font-serif text-2xl sm:text-3xl font-bold ${pkg.highlight ? 'text-amber-400' : 'text-stone-900'}`}>
                          {pkg.priceLabel}
                        </span>
                      </div>

                      {/* Coverage Checklist */}
                      <div className="space-y-3 mb-8">
                        <span className={`text-xs font-semibold uppercase tracking-wider block ${pkg.highlight ? 'text-stone-300' : 'text-stone-700'}`}>
                          Cakupan Layanan:
                        </span>
                        {pkg.coverage.map((item, idx) => (<div key={idx} className="flex items-start gap-2.5 text-xs">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.highlight ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                              <Check className="w-3 h-3"/>
                            </div>
                            <span className={pkg.highlight ? 'text-stone-300' : 'text-stone-600'}>
                              {item}
                            </span>
                          </div>))}
                      </div>
                    </div>

                    {/* Card Actions: Lihat Rincian Paket & Pesan WA */}
                    <div className={`pt-4 border-t space-y-2.5 ${pkg.highlight ? 'border-stone-800' : 'border-stone-100'}`}>
                      <Link href={`/paket/${pkg.id}`} className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${pkg.highlight
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-md hover:scale-[1.02]'
                : 'bg-stone-900 hover:bg-amber-600 text-white shadow-sm hover:scale-[1.02]'}`}>
                        <span>Lihat Rincian Jasa Paket</span>
                        <ArrowRight className="w-4 h-4"/>
                      </Link>

                      <a href={getWhatsAppUrl(pkg.waMessage)} target="_blank" rel="noopener noreferrer" className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm text-[11px] font-medium tracking-wider transition-colors ${pkg.highlight
                ? 'text-emerald-400 hover:text-emerald-300 bg-stone-800/80 hover:bg-stone-800'
                : 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100'}`}>
                        <MessageCircle className="w-3.5 h-3.5"/>
                        Konsultasi Cepat via WhatsApp
                      </a>
                    </div>
                  </div>
                </ScrollReveal>))}
            </div>

            {/* COMPARISON TABLE (Emporio Style) */}
            <div className="bg-white rounded-sm p-8 sm:p-12 border border-stone-200 shadow-sm mb-20 overflow-x-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-2">
                  Tabel Perbandingan Fitur Paket
                </h2>
                <p className="text-xs sm:text-sm text-stone-500">
                  Lihat rincian dokumen dan output yang Anda dapatkan di setiap paket desain arsitektur
                </p>
              </div>

              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-200 bg-stone-50">
                    <th className="py-4 px-4 font-serif font-bold text-stone-900 text-sm">Output & Fasilitas Desain</th>
                    <th className="py-4 px-3 text-center font-bold text-stone-700">Starter</th>
                    <th className="py-4 px-3 text-center font-bold text-stone-700">Basic</th>
                    <th className="py-4 px-3 text-center font-bold text-amber-700 bg-amber-50">Standard</th>
                    <th className="py-4 px-3 text-center font-bold text-stone-700">Premium</th>
                    <th className="py-4 px-3 text-center font-bold text-stone-700">Interior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Gambar Denah Tata Ruang 2D</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Lengkap</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold bg-amber-50/40">✓ Detail</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Detail</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">Layout Furnitur</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Visualisasi 3D Fasad Eksterior</td>
                    <td className="py-3.5 px-3 text-center text-stone-600">1 View</td>
                    <td className="py-3.5 px-3 text-center text-stone-600">2 View 4K</td>
                    <td className="py-3.5 px-3 text-center text-amber-700 font-bold bg-amber-50/40">3-5 View 4K</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">Sinematik Tak Terbatas</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Visualisasi 3D Interior Ruangan</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold bg-amber-50/40">✓ 3 Ruang Utama</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Seluruh Ruangan</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Sesuai Ruangan</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Gambar Kerja Konstruksi Lengkap (Arsitektur + Struktur + MEP)</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">Dasar</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold bg-amber-50/40">✓</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Standar Tinggi</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">Detail Joinery</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Estimasi Rencana Anggaran Biaya (RAB)</td>
                    <td className="py-3.5 px-3 text-center text-stone-500">Kasar</td>
                    <td className="py-3.5 px-3 text-center text-stone-500">Estimasi Volume</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold bg-amber-50/40">✓ RAB Detail</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ RAB Lengkap Tender</td>
                    <td className="py-3.5 px-3 text-center text-stone-500">BoQ Interior</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Video Animasi Walkthrough 3D</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                    <td className="py-3.5 px-3 text-center text-stone-600 bg-amber-50/40">Animasi Ringan</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Video 3D 4K</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Pengawasan Berkala di Lapangan</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">-</td>
                    <td className="py-3.5 px-3 text-center text-stone-400 bg-amber-50/40">Opsional Tambahan</td>
                    <td className="py-3.5 px-3 text-center text-emerald-600 font-bold">✓ Termasuk</td>
                    <td className="py-3.5 px-3 text-center text-stone-400">Opsional</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-stone-800">Pemesanan Langsung</td>
                    <td className="py-3.5 px-3 text-center">
                      <a href={getWhatsAppUrl(PACKAGES_DATA[0].waMessage)} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                        Pesan WA
                      </a>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <a href={getWhatsAppUrl(PACKAGES_DATA[1].waMessage)} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                        Pesan WA
                      </a>
                    </td>
                    <td className="py-3.5 px-3 text-center bg-amber-50/40">
                      <a href={getWhatsAppUrl(PACKAGES_DATA[2].waMessage)} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-extrabold hover:underline">
                        Pesan WA
                      </a>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <a href={getWhatsAppUrl(PACKAGES_DATA[3].waMessage)} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                        Pesan WA
                      </a>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <a href={getWhatsAppUrl(PACKAGES_DATA[4].waMessage)} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                        Pesan WA
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-2">
                  Pertanyaan Seputar Pemesanan Paket
                </h2>
                <p className="text-xs sm:text-sm text-stone-500">
                  Semua yang perlu Anda ketahui mengenai alur kerja dan garansi layanan kami
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-sm p-6 border border-stone-200">
                    <h3 className="font-serif font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0"/>
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>))}
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="bg-stone-900 text-white rounded-sm p-8 sm:p-12 text-center border border-stone-800">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Masih Ragu Memilih Paket yang Tepat?
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mb-6 leading-relaxed">
                Kirimkan ukuran lahan atau gambaran denah awal Anda melalui WhatsApp. Tim arsitek senior kami akan memberikan rekomendasi paket terbaik tanpa dipungut biaya konsultasi awal.
              </p>
              <a href={getWhatsAppUrl('Halo SPRIO Architect, saya ingin mendiskusikan rekomendasi paket yang paling pas untuk lahan saya.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105">
                <MessageCircle className="w-4 h-4"/>
                Konsultasikan dengan Arsitek via WhatsApp ({COMPANY_INFO.phoneDisplay})
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
