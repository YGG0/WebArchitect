'use client';

import React, { useEffect } from 'react';
import { ProjectImage } from '@/types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between text-white border-b border-stone-800">
        <div>
          <h4 className="font-medium text-sm text-stone-200">
            {currentImage.title}
          </h4>
          <span className="text-xs text-amber-400 capitalize">
            Kategori: {currentImage.category} • {currentIndex + 1} dari {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition"
          aria-label="Tutup"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area with Nav Arrows */}
      <div className="relative flex-1 flex items-center justify-center p-4">
        {/* Prev Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition z-10"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Image */}
        <div className="max-w-5xl max-h-[75vh] flex flex-col items-center">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-h-[70vh] w-auto object-contain rounded-xs shadow-2xl"
          />
          {currentImage.caption && (
            <p className="text-xs text-stone-300 text-center mt-3 max-w-2xl px-4 py-1.5 bg-stone-900/80 rounded-sm">
              {currentImage.caption}
            </p>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition z-10"
          aria-label="Foto Selanjutnya"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Thumbnails Row */}
      <div className="p-4 border-t border-stone-800 flex justify-center gap-2 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => onNavigate(idx)}
            className={`w-16 h-12 rounded-xs overflow-hidden border-2 transition shrink-0 ${
              idx === currentIndex ? 'border-amber-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img.url} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

