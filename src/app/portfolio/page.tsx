'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PortfolioFilter, { SortOption } from '@/components/portfolio/PortfolioFilter';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ScrollReveal from '@/components/common/ScrollReveal';
import { INITIAL_PROJECTS } from '@/data/mockData';
import { PortfolioFilterState } from '@/types';
import { Sparkles, Building2, SearchX } from 'lucide-react';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<PortfolioFilterState>({
    search: '',
    category: 'Semua Kategori',
    style: 'Semua Gaya',
    status: 'Semua Status',
    year: 'Semua Tahun',
    floors: 'Semua Lantai',
    areaRange: 'Semua Luas',
    location: 'Semua Lokasi',
  });

  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const filteredProjects = useMemo(() => {
    const list = INITIAL_PROJECTS.filter((proj) => {
      // 1. Search text (title, code, location, style)
      if (filter.search.trim() !== '') {
        const q = filter.search.toLowerCase();
        const matchTitle = proj.title.toLowerCase().includes(q);
        const matchCode = proj.code.toLowerCase().includes(q);
        const matchLoc = proj.location.toLowerCase().includes(q);
        const matchStyle = proj.style.toLowerCase().includes(q);
        if (!matchTitle && !matchCode && !matchLoc && !matchStyle) return false;
      }

      // 2. Category matching
      if (filter.category !== 'Semua Kategori' && proj.category !== filter.category) {
        return false;
      }

      // 3. Status matching (constructionStatus)
      if (filter.status !== 'Semua Status' && proj.constructionStatus !== filter.status) {
        return false;
      }

      // 4. Year matching
      if (filter.year !== 'Semua Tahun' && proj.year.toString() !== filter.year) {
        return false;
      }

      // 5. Location matching
      if (filter.location !== 'Semua Lokasi' && !proj.location.toLowerCase().includes(filter.location.toLowerCase())) {
        return false;
      }

      // 6. Style matching
      if (filter.style !== 'Semua Gaya' && proj.style !== filter.style) {
        return false;
      }

      // 7. Area range matching
      if (filter.areaRange !== 'Semua Luas') {
        if (filter.areaRange === '< 300 m²' && proj.buildingArea >= 300) return false;
        if (filter.areaRange === '300 - 600 m²' && (proj.buildingArea < 300 || proj.buildingArea > 600)) return false;
        if (filter.areaRange === '> 600 m²' && proj.buildingArea <= 600) return false;
      }

      return true;
    });

    return list.sort((a, b) => {
      if (sortBy === 'area-desc') return b.buildingArea - a.buildingArea;
      if (sortBy === 'area-asc') return a.buildingArea - b.buildingArea;
      if (sortBy === 'oldest') return a.year - b.year || a.title.localeCompare(b.title);
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
      return b.year - a.year || b.title.localeCompare(a.title);
    });
  }, [filter, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Full-width Hero Banner with Image */}
        <section className="relative w-full h-[45vh] min-h-[340px] flex items-center justify-center overflow-hidden bg-stone-950 text-white pt-24 pb-12">
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85"
              alt="Portofolio Arsitektur"
              className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
              Galeri Portofolio Arsitektur
            </h1>
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
              Koleksi karya desain villa tropis, hunian residensial eksklusif, dan bangunan komersial yang telah kami rancang dengan presisi arsitektural tinggi.
            </p>
          </div>
        </section>

        {/* Filter & Sort Section */}
        <section className="pt-10 pb-4 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioFilter
              filter={filter}
              onChange={setFilter}
              totalResults={filteredProjects.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
        </section>

        {/* Full-bleed Photo Grid Section (ZERO GAP, BIG PHOTOS, 30 ITEMS) */}
        <section className="pb-24 bg-stone-50">
          {filteredProjects.length > 0 ? (
            <div className="w-full max-w-[1920px] mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {filteredProjects.map((project, idx) => (
                  <ScrollReveal 
                    key={project.id} 
                    animation="fade-up" 
                    delay={(idx % 6) * 90}
                    duration={700}
                  >
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto px-4">
              <div className="bg-white rounded-sm border border-stone-200 p-16 text-center my-8 space-y-4 shadow-sm">
                <SearchX className="w-12 h-12 text-stone-400 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Tidak Ada Proyek yang Cocok
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Kriteria pencarian atau filter yang Anda pilih saat ini belum memiliki proyek yang sesuai. Coba ubah atau reset filter.
                </p>
                <button
                  onClick={() => {
                    setFilter({
                      search: '',
                      category: 'Semua Kategori',
                      style: 'Semua Gaya',
                      status: 'Semua Status',
                      year: 'Semua Tahun',
                      floors: 'Semua Lantai',
                      areaRange: 'Semua Luas',
                      location: 'Semua Lokasi',
                    });
                    setSortBy('latest');
                  }}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase px-6 py-2.5 rounded-xs transition"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Tampilkan Semua Proyek
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
