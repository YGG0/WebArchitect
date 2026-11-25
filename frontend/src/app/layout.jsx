import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import './globals.css';

export const metadata = {
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

export default function RootLayout({ children }) {
    return (
      <html lang="id" suppressHydrationWarning className="h-full antialiased">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body suppressHydrationWarning className="min-h-full flex flex-col font-sans text-stone-900 bg-stone-50 selection:bg-amber-500 selection:text-white">
          {children}
          <FloatingWhatsApp />
        </body>
      </html>
    );
}
