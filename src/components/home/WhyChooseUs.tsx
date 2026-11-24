import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  Headphones, 
  ArrowRight 
} from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: 'Tim Arsitek Berlisensi IAI',
      desc: 'Setiap desain dikerjakan dan diverifikasi oleh arsitek bersertifikat resmi, menjamin keamanan struktur dan kepatuhan regulasi tata kota.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: 'Visualisasi 3D Ultra Photorealistic',
      desc: 'Kami menyajikan gambar 3D eksterior dan interior dengan pencahayaan serta material nyata, sehingga Anda dapat melihat wujud asli hunian sebelum dibangun.'
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      title: 'Gambar Kerja Detail & Estimasi RAB',
      desc: 'Paket dokumen teknis meliputi gambar arsitektur, struktur, MEP (mekanikal elektrikal plumbing), serta estimasi RAB presisi untuk mencegah pembengkakan biaya.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-amber-500" />,
      title: 'Konsultasi Online Seluruh Indonesia',
      desc: 'Proses asistensi desain dapat dilakukan secara fleksibel melalui tatap muka di studio kami maupun pertemuan virtual interaktif dari kota mana pun.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xs overflow-hidden shadow-2xl border border-stone-200 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Architects in Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-stone-950 text-white p-6 rounded-xs shadow-2xl border border-amber-500/40 max-w-[240px]">
              <div className="font-serif text-3xl font-bold text-amber-400">15+ Tahun</div>
              <p className="text-xs text-stone-300 mt-1 uppercase tracking-wider font-medium">
                Mendedikasikan Diri untuk Desain Arsitektur Prestisius
              </p>
            </div>
          </div>

          {/* Right Column: Advantages Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2 tracking-tight">
                Standar Kualitas Tertinggi untuk Investasi Properti Anda
              </h2>
              <div className="w-16 h-1 bg-amber-500 mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, idx) => (
                <div key={idx} className="p-5 bg-stone-50 rounded-xs border border-stone-200 hover:border-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-xs bg-stone-900 flex items-center justify-center mb-4">
                    {adv.icon}
                  </div>
                  <h3 className="font-serif text-base font-bold text-stone-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 hover:text-amber-800 transition"
              >
                Kenali Filosofi & Tim Arsitek Kami Lebih Dekat <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

