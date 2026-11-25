'use client';
import { useState, useEffect } from 'react';

export const DEFAULT_SITE_SETTINGS = {
  heroTitle: 'Architecture Design',
  heroSubtitle: 'Your Partner in Perfect Architecture & Interior Creation',
  heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2200&q=90',
  homePortfolioTitle: 'Karya Desain Arsitektur Unggulan',
  homePortfolioDesc: 'Eksplorasi portofolio pilihan kami yang dirancang berdasarkan kategori spesialisasi arsitektur dan interior.',

  portfolioTitle: 'Galeri Portofolio Arsitektur',
  portfolioDesc: 'Koleksi karya desain villa tropis, hunian residensial eksklusif, dan bangunan komersial yang telah kami rancang dengan presisi arsitektural tinggi.',
  portfolioBannerImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85',

  layananTitle: 'Layanan Desain Arsitektur & Interior',
  layananDesc: 'Kami menyajikan layanan arsitektur end-to-end dengan standar presisi tinggi, mengintegrasikan estetika visual kontemporer, kenyamanan tata ruang, serta efisiensi anggaran konstruksi.',
  layananBannerImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=85',

  paketTitle: 'Pilihan Paket Desain Arsitektur & Interior',
  paketDesc: 'Temukan paket rancang bangun yang dirancang proporsional sesuai luas dan kebutuhan proyek Anda. Terintegrasi langsung dengan WhatsApp tim arsitek kami untuk konsultasi dan pemesanan instan.',
  paketBannerImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',

  tentangTitle: 'Tentang SPRIO Architect & Interior',
  tentangDesc: 'Mendedikasikan diri selama lebih dari 15 tahun dalam menciptakan karya arsitektur hunian yang memadukan keindahan proporsi klasik dan kemurnian desain modern tropis.',
  tentangHeadline: 'Arsitektur Bukan Sekadar Bangunan, Melainkan Ruang Jiwa & Kehidupan',
  tentangBody1: 'Berdiri sejak tahun 2009, SPRIO Architect berkembang menjadi salah satu biro perancang arsitektur premium di Indonesia. Kami percaya bahwa setiap keluarga memiliki kebiasaan, ritme kehidupan, dan cita rasa estetika yang unik.',
  tentangBody2: 'Oleh karena itu, setiap garis desain yang kami torehkan selalu diawali dengan pemahaman mendalam atas kepribadian pemilik rumah, analisis orientasi matahari, serta sirkulasi angin alami tropis Indonesia.',
  tentangBannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85',
  tentangSideImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',

  kontakTitle: 'Contact Us',
  kontakSubtitle: 'Your Partner in Perfect Architecture & Interior Creation',
  whatsappNumber: '6287872008510',
  whatsappDisplay: '+62 878-7200-8510',
  email: 'studio@sprioarchitect.com',
  phones: [
    { label: 'WhatsApp Hotline', number: '6287872008510', display: '+62 878-7200-8510' },
  ],
  emails: ['studio@sprioarchitect.com'],
  address: 'Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190',
  branchAddress: 'Cabang Bali: Jl. Pantai Batu Bolong, Canggu',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Senopati+No.+88,+Kebayoran+Baru,+Jakarta+Selatan',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Jl.+Senopati+No.+88,+Kebayoran+Baru,+Jakarta+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULT_SITE_SETTINGS);

  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    fetch(`${apiBase}/api/settings`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) {
          setSettings((prev) => ({ ...prev, ...json.data }));
        }
      })
      .catch(() => {});
  }, []);

  return settings;
}
