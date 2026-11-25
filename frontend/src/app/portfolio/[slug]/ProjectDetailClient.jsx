'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryLightbox from '@/components/portfolio/GalleryLightbox';
import ProjectCard from '@/components/portfolio/ProjectCard';
const PanoramaViewer360 = dynamic(() => import('@/components/portfolio/PanoramaViewer360'), {
    ssr: false,
    loading: () => (<div className="w-full h-[450px] bg-stone-900 rounded-lg flex items-center justify-center text-stone-400 text-xs animate-pulse">
        Memuat 360° Virtual Tour...
      </div>)
});
import { INITIAL_PROJECTS, getWhatsAppUrl } from '@/data/mockData';
import { MapPin, Layers, Maximize2, Bed, Bath, Car, Calendar, ArrowLeft, Share2, Maximize, Compass, MessageCircle } from 'lucide-react';
export default function ProjectDetailClient({ project }) {
    const [activeTab, setActiveTab] = useState('semua');
    const [active360Index, setActive360Index] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    // Filter images by active tab
    const displayedImages = activeTab === 'semua'
        ? project.images
        : project.images.filter((img) => img.category === activeTab);
    // Related projects
    const relatedProjects = INITIAL_PROJECTS
        .filter((p) => p.id !== project.id && (p.category === project.category || p.style === project.style))
        .slice(0, 3);
    const handleOpenLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };
    const waUrl = getWhatsAppUrl(`Halo SPRIO Architect, saya melihat portofolio ${project.title} (${project.category} - ${project.style}, ${project.location}). Saya tertarik untuk berkonsultasi mengenai desain serupa untuk lahan saya.`);
    return (<div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header Bar */}
        <section className="bg-stone-900 text-stone-300 pt-24 pb-6 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-semibold uppercase tracking-wider transition">
              <ArrowLeft className="w-3.5 h-3.5"/> Kembali ke Portofolio
            </Link>

            <div className="flex items-center gap-3 text-xs text-stone-400">
              <span className="font-mono bg-stone-800 text-stone-200 px-2 py-0.5 rounded-xs">
                Kode: {project.code}
              </span>
              <button onClick={() => {
            if (typeof navigator !== 'undefined' && navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Tautan proyek berhasil disalin ke clipboard!');
            }
        }} className="flex items-center gap-1 hover:text-white transition" title="Bagikan Tautan">
                <Share2 className="w-3.5 h-3.5"/> Bagikan
              </button>
            </div>
          </div>
        </section>

        {/* Project Header Showcase */}
        <section className="bg-white py-12 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>


                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                  {project.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-500 mt-3">
                  <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                    <MapPin className="w-4 h-4 text-amber-600"/> {project.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                    <Calendar className="w-4 h-4 text-amber-600"/> Tahun Dibangun: {project.year}
                  </span>
                </div>
              </div>

              {/* Consultation WA CTA */}
              <div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#229653] hover:bg-[#1e8349] text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-xs transition-all shadow-md hover:shadow-xl hover:scale-105">
                  <MessageCircle className="w-4 h-4"/>
                  Konsultasikan Desain Ini via WA
                </a>
              </div>
            </div>

            {/* Architectural Specifications Summary Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-5 bg-stone-900 text-white rounded-xs border border-stone-800 shadow-sm mb-10">
              <div className="p-3 border-r border-stone-800/80 last:border-none">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-500"/> Jumlah Lantai
                </span>
                <span className="font-serif text-xl font-bold text-amber-400 block mt-1">
                  {project.floors} Lantai
                </span>
              </div>

              <div className="p-3 border-r border-stone-800/80 last:border-none">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-500"/> Luas Bangunan
                </span>
                <span className="font-serif text-xl font-bold text-white block mt-1">
                  {project.buildingArea} m²
                </span>
              </div>

              <div className="p-3 border-r border-stone-800/80 last:border-none">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Maximize className="w-3.5 h-3.5 text-amber-500"/> Luas Lahan
                </span>
                <span className="font-serif text-xl font-bold text-white block mt-1">
                  {project.landArea ? `${project.landArea} m²` : '-'}
                </span>
              </div>

              <div className="p-3 border-r border-stone-800/80 last:border-none">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-amber-500"/> Kamar Tidur
                </span>
                <span className="font-serif text-xl font-bold text-white block mt-1">
                  {project.bedrooms ?? '-'} Ruang
                </span>
              </div>

              <div className="p-3 border-r border-stone-800/80 last:border-none">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Bath className="w-3.5 h-3.5 text-amber-500"/> Kamar Mandi
                </span>
                <span className="font-serif text-xl font-bold text-white block mt-1">
                  {project.bathrooms ?? '-'} Ruang
                </span>
              </div>

              <div className="p-3">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-amber-500"/> Garasi Mobil
                </span>
                <span className="font-serif text-xl font-bold text-white block mt-1">
                  {project.garages ? `${project.garages} Mobil` : '-'}
                </span>
              </div>
            </div>

            {/* Concept & Description Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-200">
              <div className="lg:col-span-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-stone-900 border-l-3 border-amber-600 pl-3">
                  Deskripsi & Latar Belakang Bangunan
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-stone-900 border-l-3 border-amber-600 pl-3">
                  Konsep Arsitektur & Filosofi Ruang
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {project.concept}
                </p>
              </div>
            </div>

            {/* Categorized Gallery Section (Eksterior, Interior, Denah) */}
            <div className="pt-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Galeri Foto Bangunan & Denah Ruang
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Arahkan pointer dan klik foto untuk melihat dalam resolusi tinggi penuh (HD Fullscreen Lightbox).
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xs border border-stone-200">
                  <button onClick={() => setActiveTab('semua')} className={`text-xs font-semibold px-4 py-2 rounded-xs transition ${activeTab === 'semua'
            ? 'bg-stone-900 text-white shadow-xs'
            : 'text-stone-600 hover:text-stone-900'}`}>
                    Semua ({project.images.length})
                  </button>
                  <button onClick={() => setActiveTab('eksterior')} className={`text-xs font-semibold px-4 py-2 rounded-xs transition ${activeTab === 'eksterior'
            ? 'bg-stone-900 text-white shadow-xs'
            : 'text-stone-600 hover:text-stone-900'}`}>
                    Eksterior
                  </button>
                  <button onClick={() => setActiveTab('interior')} className={`text-xs font-semibold px-4 py-2 rounded-xs transition ${activeTab === 'interior'
            ? 'bg-stone-900 text-white shadow-xs'
            : 'text-stone-600 hover:text-stone-900'}`}>
                    Interior
                  </button>
                  <button onClick={() => setActiveTab('denah')} className={`text-xs font-semibold px-4 py-2 rounded-xs transition ${activeTab === 'denah'
            ? 'bg-stone-900 text-white shadow-xs'
            : 'text-stone-600 hover:text-stone-900'}`}>
                    Denah Layout
                  </button>

                  {/* 360 Virtual Tour Tab */}
                  {project.panorama360 && project.panorama360.length > 0 && (<button onClick={() => setActiveTab('360')} className={`text-xs font-semibold px-4 py-2 rounded-xs transition flex items-center gap-1.5 ${activeTab === '360'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-amber-700 bg-amber-50 hover:bg-amber-100 hover:text-amber-800'}`}>
                      <Compass className="w-3.5 h-3.5"/>
                      Virtual Tour 360° ({project.panorama360.length})
                    </button>)}
                </div>
              </div>

              {/* VIEW 360 DEGREE PANORAMA */}
              {activeTab === '360' && project.panorama360 && project.panorama360.length > 0 ? (<div className="space-y-4">
                  {/* Room Switcher Pills if multiple 360 panoramas */}
                  {project.panorama360.length > 1 && (<div className="flex items-center gap-2 overflow-x-auto pb-1">
                      <span className="text-xs text-stone-500 font-medium mr-1">Pilih Sudut Ruangan:</span>
                      {project.panorama360.map((pano, pIdx) => (<button key={pano.id} onClick={() => setActive360Index(pIdx)} className={`text-xs px-3.5 py-1.5 rounded-full border transition ${active360Index === pIdx
                        ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'}`}>
                          {pano.roomName || pano.title}
                        </button>))}
                    </div>)}

                  {/* Three.js 360 Viewer Canvas */}
                  <PanoramaViewer360 key={project.panorama360[active360Index].id} imageUrl={project.panorama360[active360Index].url} title={`${project.title} — ${project.panorama360[active360Index].roomName || project.panorama360[active360Index].title}`}/>
                </div>) : (
        /* Gallery Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedImages.map((image, idx) => (<div key={image.id} onClick={() => handleOpenLightbox(idx)} className="group relative aspect-[16/11] overflow-hidden rounded-xs bg-stone-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300">
                    <img src={image.url} alt={image.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"/>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                      <span className="text-[10px] text-amber-400 uppercase font-semibold tracking-wider">
                        {image.category}
                      </span>
                      <h4 className="font-serif text-base font-bold drop-shadow">{image.title}</h4>
                      {image.caption && (<p className="text-xs text-stone-300 line-clamp-2 mt-1">
                          {image.caption}
                        </p>)}
                    </div>
                  </div>))}
              </div>)}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <GalleryLightbox images={displayedImages} currentIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} onNavigate={(newIdx) => setLightboxIndex(newIdx)}/>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (<section className="py-20 bg-stone-100 border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Koleksi Karya Arsitektur Terkait
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {relatedProjects.map((p) => (<ProjectCard key={p.id} project={p}/>))}
              </div>
            </div>
          </section>)}
      </main>

      <Footer />
    </div>);
}
