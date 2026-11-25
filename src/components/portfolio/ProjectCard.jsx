'use client';
import React from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';
export default function ProjectCard({ project }) {
    return (<Link href={`/portfolio/${project.slug}`} className="group relative block aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden cursor-pointer bg-stone-900">
      {/* 1. Full-bleed Architectural Photo */}
      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out" loading="lazy" decoding="async"/>

      {/* 2. Soft Dark Vignette / Gradient Overlay (HIDDEN BY DEFAULT, APPEARS ONLY ON HOVER) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out pointer-events-none"/>

      {/* 3. Top-Right: Circular Zoom / View Icon (HIDDEN BY DEFAULT, APPEARS ON HOVER) */}
      <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-xs scale-90 group-hover:scale-100 pointer-events-none">
        <Eye className="w-5 h-5 text-white"/>
      </div>

      {/* 4. Bottom Overlay: Title, Location & Year, Category (HIDDEN BY DEFAULT, APPEARS ON HOVER) */}
      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 text-white space-y-1.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none">
        <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-amber-400 transition-colors drop-shadow-md">
          {project.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-stone-200 font-light flex items-center gap-2">
          <span>{project.location}</span>
          <span>-</span>
          <span>{project.year}</span>
        </p>

        <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold pt-1">
          {project.category} • {project.style}
        </p>
      </div>
    </Link>);
}
