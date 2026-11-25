'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/mockData';
export default function ProjectDetailModal({ project, isOpen, onClose }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('semua');
    // Reset image index when modal opens or project changes
    useEffect(() => {
        setActiveImageIndex(0);
        setActiveCategory('semua');
    }, [project]);
    // Handle escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen || !project)
        return null;
    // Filter gallery images by selected category
    const filteredImages = activeCategory === 'semua'
        ? project.images
        : project.images.filter((img) => img.category === activeCategory);
    const currentImage = filteredImages[activeImageIndex] || project.images[0];
    const handlePrev = (e) => {
        e.stopPropagation();
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
    };
    const handleNext = (e) => {
        e.stopPropagation();
        setActiveImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
    };
    return (<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200" onClick={onClose}>
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-stone-950 text-white rounded-xs border border-stone-800 shadow-2xl overflow-hidden my-auto flex flex-col lg:flex-row max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition border border-white/20" aria-label="Tutup Detail">
          <X className="w-5 h-5"/>
        </button>

        {/* 1. LEFT COLUMN: INTERACTIVE PHOTO GALLERY (60% width) */}
        <div className="lg:w-7/12 bg-black flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-800">
          {/* Gallery Category Filter Tabs */}
          <div className="p-4 bg-stone-950/80 border-b border-stone-800/80 flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-stone-400 font-mono text-[10px] uppercase mr-2 tracking-wider">
              Galeri:
            </span>
            {['semua', 'eksterior', 'interior', 'denah'].map((cat) => (<button key={cat} onClick={() => {
                setActiveCategory(cat);
                setActiveImageIndex(0);
            }} className={`px-3 py-1 rounded-xs uppercase tracking-wider text-[11px] font-semibold transition ${activeCategory === cat
                ? 'bg-amber-600 text-white'
                : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'}`}>
                {cat === 'semua' ? `Semua (${project.images.length})` : cat}
              </button>))}
          </div>

          {/* Main Photo Display with Navigation Arrows */}
          <div className="relative flex-1 min-h-[320px] sm:min-h-[440px] flex items-center justify-center bg-stone-950 overflow-hidden group">
            {currentImage && (<img src={currentImage.url} alt={currentImage.title} className="w-full h-full max-h-[60vh] object-contain transition-all duration-300"/>)}

            {/* Prev Button */}
            {filteredImages.length > 1 && (<button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-600 text-white flex items-center justify-center backdrop-blur-xs transition border border-white/20" aria-label="Foto Sebelumnya">
                <ChevronLeft className="w-6 h-6"/>
              </button>)}

            {/* Next Button */}
            {filteredImages.length > 1 && (<button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-600 text-white flex items-center justify-center backdrop-blur-xs transition border border-white/20" aria-label="Foto Selanjutnya">
                <ChevronRight className="w-6 h-6"/>
              </button>)}

            {/* Bottom Caption & Counter Indicator */}
            {currentImage && (<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-xs text-stone-300">
                <span className="font-medium text-white truncate max-w-[75%]">
                  {currentImage.title} {currentImage.caption ? `— ${currentImage.caption}` : ''}
                </span>
                <span className="font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded-xs border border-white/10 shrink-0">
                  {activeImageIndex + 1} / {filteredImages.length}
                </span>
              </div>)}
          </div>

          {/* Thumbnail Carousel Row */}
          <div className="p-3 bg-stone-950 border-t border-stone-800/80 flex items-center gap-2 overflow-x-auto">
            {filteredImages.map((img, idx) => (<button key={img.id} onClick={() => setActiveImageIndex(idx)} className={`relative w-16 h-12 rounded-xs overflow-hidden shrink-0 border-2 transition ${activeImageIndex === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                <img src={img.url} alt={img.title} className="w-full h-full object-cover"/>
              </button>))}
          </div>
        </div>

        {/* 2. RIGHT COLUMN: BUILDING SPECS, STATUS, LOCATION, YEAR (40% width) */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] bg-stone-950 space-y-6">
          <div className="space-y-6">
            {/* Category, Status & Code Header */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold px-2.5 py-0.5 rounded-xs uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-stone-400">
                  #{project.code}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>

              <p className="text-xs text-stone-400 flex items-center gap-1.5 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0"/>
                <span className="text-stone-300 font-medium">{project.location}</span>
                <span>•</span>
                <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0"/>
                <span>Tahun {project.year}</span>
              </p>
            </div>

            {/* Detailed Architectural Specifications Table */}
            <div className="border border-stone-800 rounded-xs p-4 bg-stone-900/60 space-y-2.5 text-xs">
              <h4 className="text-[11px] font-serif font-bold uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-1.5">
                Spesifikasi Bangunan:
              </h4>

              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                <div>
                  <span className="text-stone-400 block text-[11px]">Gaya Arsitektur:</span>
                  <span className="font-semibold text-white">{project.style}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Jumlah Lantai:</span>
                  <span className="font-semibold text-white">{project.floors} Lantai</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Luas Bangunan:</span>
                  <span className="font-semibold text-amber-400">{project.buildingArea} m²</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Luas Lahan:</span>
                  <span className="font-semibold text-white">{project.landArea ? `${project.landArea} m²` : '-'}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Kamar Tidur:</span>
                  <span className="font-semibold text-white">{project.bedrooms ? `${project.bedrooms} KT` : '-'}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[11px]">Kamar Mandi:</span>
                  <span className="font-semibold text-white">{project.bathrooms ? `${project.bathrooms} KM` : '-'}</span>
                </div>
              </div>
            </div>

            {/* Concept & Description Narrative */}
            <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
              <h4 className="text-[11px] font-serif font-bold uppercase tracking-wider text-stone-200">
                Konsep Desain:
              </h4>
              <p className="text-stone-400 font-light">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-stone-800 space-y-2.5">
            <a href={getWhatsAppUrl(`Halo SPRIO Architect, saya tertarik dengan proyek ${project.title} (${project.style}, ${project.location} - Tahun ${project.year}). Boleh saya jadwalkan konsultasi desain serupa?`)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#229653] hover:bg-[#1e8349] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xs transition-all shadow-md hover:scale-[1.02]">
              <MessageCircle className="w-4 h-4"/>
              Konsultasi Proyek Ini via WA
            </a>

            <Link href={`/portfolio/${project.slug}`} className="w-full inline-flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-xs border border-stone-700 transition">
              Buka Halaman Lengkap Proyek <ArrowUpRight className="w-4 h-4 text-amber-400"/>
            </Link>
          </div>
        </div>
      </div>
    </div>);
}
