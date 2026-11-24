import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'SPRIO Architect & Interior | Jasa Desain Arsitektur Rumah Mewah & Villa',
  description: 'Biro konsultan arsitektur dan desain interior terkemuka di Indonesia. Menghadirkan desain rumah modern tropis, klasik mewah, mediterania, dan villa dengan visualisasi 3D realistis dan gambar kerja lengkap.',
  keywords: [
    'jasa arsitek rumah mewah',
    'desain rumah modern tropis',
    'desain villa bali',
    'arsitek indonesia',
    'emporio architect referensi',
    'desain interior rumah',
    'biro arsitek jakarta surabaya bali'
  ],
  openGraph: {
    title: 'SPRIO Architect & Interior - Mahakarya Desain Arsitektur',
    description: 'Jasa desain arsitektur dan interior rumah tinggal mewah, villa, dan bangunan komersial.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-stone-900 bg-stone-50 selection:bg-amber-500 selection:text-white">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
