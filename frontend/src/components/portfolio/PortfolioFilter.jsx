'use client';
import React, { useState } from 'react';
import { CATEGORIES_LIST, STATUS_LIST, YEARS_LIST, LOCATIONS_LIST, AREA_RANGES } from '@/data/mockData';
import { Search, SlidersHorizontal, LayoutGrid, MapPin, Calendar, Maximize2, RotateCcw, ArrowUpDown, ChevronDown, X, CheckCircle2 } from 'lucide-react';
export default function PortfolioFilter({ filter, onChange, sortBy, onSortChange, }) {
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(true);
    const handleInputChange = (field, value) => {
        onChange({
            ...filter,
            [field]: value,
        });
    };
    const handleReset = () => {
        onChange({
            search: '',
            category: 'Semua Kategori',
            style: 'Semua Gaya',
            status: 'Semua Status',
            year: 'Semua Tahun',
            floors: 'Semua Lantai',
            areaRange: 'Semua Luas',
            location: 'Semua Lokasi',
        });
        onSortChange('latest');
    };
    const isFiltered = Boolean(filter.search.trim()) ||
        filter.category !== 'Semua Kategori' ||
        filter.status !== 'Semua Status' ||
        filter.year !== 'Semua Tahun' ||
        filter.location !== 'Semua Lokasi' ||
        filter.areaRange !== 'Semua Luas';
    // Count how many filters are active
    const activeFilterCount = [
        Boolean(filter.search.trim()),
        filter.category !== 'Semua Kategori',
        filter.status !== 'Semua Status',
        filter.year !== 'Semua Tahun',
        filter.location !== 'Semua Lokasi',
        filter.areaRange !== 'Semua Luas'
    ].filter(Boolean).length;
    return (<div className="w-full mb-8 space-y-4">
      {/* Luxury Floating Search & Filter Island */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.05)] p-3 lg:p-4 transition-all">
        {/* Top Row: Search Input + Sort Dropdown + Filter Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* High-End Search Bar */}
          <div className="group relative flex-1 flex items-center bg-stone-50 hover:bg-stone-100/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500 border border-stone-200/80 rounded-xl transition-all px-3 py-1.5">
            <div className="w-8 h-8 rounded-lg bg-stone-200/60 group-focus-within:bg-amber-600 group-focus-within:text-white text-stone-500 flex items-center justify-center shrink-0 transition-colors">
              <Search className="w-4 h-4"/>
            </div>
            <input type="text" value={filter.search} onChange={(e) => handleInputChange('search', e.target.value)} placeholder="Cari nama mahakarya arsitektur, lokasi, atau konsep..." className="w-full pl-3 pr-8 py-1.5 text-xs sm:text-sm bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none font-light"/>
            {filter.search && (<button onClick={() => handleInputChange('search', '')} className="absolute right-3 w-5 h-5 rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300 flex items-center justify-center text-[11px] transition" title="Hapus pencarian">
                <X className="w-3 h-3"/>
              </button>)}
          </div>

          {/* Controls: Sort & Filter Toggle */}
          <div className="flex items-center gap-2.5 shrink-0 justify-between md:justify-end">
            {/* Sort Dropdown */}
            <div className="relative flex items-center">
              <div className="relative flex items-center bg-stone-50 border border-stone-200/80 rounded-xl px-3 py-2 hover:border-stone-300 transition-colors focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20">
                <ArrowUpDown className="w-3.5 h-3.5 text-amber-600 shrink-0 mr-2"/>
                <span className="text-xs text-stone-500 mr-1.5 hidden sm:inline">Urutkan:</span>
                <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="bg-transparent text-xs font-medium text-stone-800 pr-5 focus:outline-none cursor-pointer appearance-none">
                  <option value="latest">Terbaru (Tahun ↓)</option>
                  <option value="oldest">Terlama (Tahun ↑)</option>
                  <option value="area-desc">Luas Terbesar (m² ↓)</option>
                  <option value="area-asc">Luas Terkecil (m² ↑)</option>
                  <option value="title-asc">Nama Proyek (A - Z)</option>
                  <option value="title-desc">Nama Proyek (Z - A)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 pointer-events-none"/>
              </div>
            </div>

            {/* Toggle Detailed Filters Button */}
            <button onClick={() => setShowAdvancedFilters(!showAdvancedFilters)} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors border cursor-pointer ${showAdvancedFilters || activeFilterCount > 0
            ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
            : 'bg-stone-50 text-stone-700 border-stone-200/80 hover:bg-stone-100 hover:border-stone-300'}`}>
              <SlidersHorizontal className="w-3.5 h-3.5"/>
              <span className="hidden sm:inline">Filter Detail</span>
              {activeFilterCount > 0 && (<span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>)}
            </button>
          </div>
        </div>

        {/* Bottom Row: Detailed Architectural Filters */}
        {showAdvancedFilters && (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-3 pt-3 border-t border-stone-100 transition-all">
            {/* 1. Kategori Filter */}
            <div className={`relative flex items-center rounded-xl border px-3 py-2 transition-all ${filter.category !== 'Semua Kategori'
                ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/30'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/70'}`}>
              <LayoutGrid className={`w-3.5 h-3.5 shrink-0 mr-2 ${filter.category !== 'Semua Kategori' ? 'text-amber-600' : 'text-stone-400'}`}/>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block -mb-0.5">Kategori</span>
                <select value={filter.category} onChange={(e) => handleInputChange('category', e.target.value)} className="w-full bg-transparent text-xs font-medium text-stone-800 pr-5 focus:outline-none cursor-pointer appearance-none truncate">
                  <option value="Semua Kategori">Semua Kategori</option>
                  {CATEGORIES_LIST.filter(c => c !== 'Semua Kategori').map((cat) => (<option key={cat} value={cat}>
                      {cat}
                    </option>))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 pointer-events-none"/>
            </div>

            {/* 2. Status Filter */}
            <div className={`relative flex items-center rounded-xl border px-3 py-2 transition-all ${filter.status !== 'Semua Status'
                ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/30'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/70'}`}>
              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mr-2 ${filter.status !== 'Semua Status' ? 'text-amber-600' : 'text-stone-400'}`}/>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block -mb-0.5">Status</span>
                <select value={filter.status} onChange={(e) => handleInputChange('status', e.target.value)} className="w-full bg-transparent text-xs font-medium text-stone-800 pr-5 focus:outline-none cursor-pointer appearance-none truncate">
                  <option value="Semua Status">Semua Status</option>
                  {STATUS_LIST.filter(s => s !== 'Semua Status').map((st) => (<option key={st} value={st}>
                      {st}
                    </option>))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 pointer-events-none"/>
            </div>

            {/* 3. Lokasi Filter */}
            <div className={`relative flex items-center rounded-xl border px-3 py-2 transition-all ${filter.location !== 'Semua Lokasi'
                ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/30'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/70'}`}>
              <MapPin className={`w-3.5 h-3.5 shrink-0 mr-2 ${filter.location !== 'Semua Lokasi' ? 'text-amber-600' : 'text-stone-400'}`}/>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block -mb-0.5">Lokasi</span>
                <select value={filter.location} onChange={(e) => handleInputChange('location', e.target.value)} className="w-full bg-transparent text-xs font-medium text-stone-800 pr-5 focus:outline-none cursor-pointer appearance-none truncate">
                  <option value="Semua Lokasi">Semua Lokasi</option>
                  {LOCATIONS_LIST.filter(l => l !== 'Semua Lokasi').map((loc) => (<option key={loc} value={loc}>
                      {loc}
                    </option>))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 pointer-events-none"/>
            </div>

            {/* 4. Tahun Filter */}
            <div className={`relative flex items-center rounded-xl border px-3 py-2 transition-all ${filter.year !== 'Semua Tahun'
                ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/30'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/70'}`}>
              <Calendar className={`w-3.5 h-3.5 shrink-0 mr-2 ${filter.year !== 'Semua Tahun' ? 'text-amber-600' : 'text-stone-400'}`}/>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block -mb-0.5">Tahun</span>
                <select value={filter.year} onChange={(e) => handleInputChange('year', e.target.value)} className="w-full bg-transparent text-xs font-medium text-stone-800 pr-5 focus:outline-none cursor-pointer appearance-none truncate">
                  <option value="Semua Tahun">Semua Tahun</option>
                  {YEARS_LIST.filter(y => y !== 'Semua Tahun').map((yr) => (<option key={yr} value={yr}>
                      {yr}
                    </option>))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 pointer-events-none"/>
            </div>

            {/* 5. Luas Bangunan Filter */}
            <div className={`relative flex items-center rounded-xl border px-3 py-2 transition-all ${filter.areaRange !== 'Semua Luas'
                ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400/30'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/70'}`}>
              <Maximize2 className={`w-3.5 h-3.5 shrink-0 mr-2 ${filter.areaRange !== 'Semua Luas' ? 'text-amber-600' : 'text-stone-400'}`}/>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block -mb-0.5">Luas Bangunan</span>
                <select value={filter.areaRange} onChange={(e) => handleInputChange('areaRange', e.target.value)} className="w-full bg-transparent text-xs font-medium text-stone-800 pr-5 focus:outline-none cursor-pointer appearance-none truncate">
                  <option value="Semua Luas">Semua Luas</option>
                  {AREA_RANGES.filter(a => a !== 'Semua Luas').map((ar) => (<option key={ar} value={ar}>
                      {ar}
                    </option>))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 pointer-events-none"/>
            </div>
          </div>)}
      </div>

      {/* Active Filters Chips & Reset (Only shows when filters are active) */}
      {isFiltered && (<div className="flex flex-wrap items-center justify-between gap-2 px-1 pt-1">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-stone-400 text-[11px] font-medium mr-1">Filter Aktif:</span>
            
            {filter.search.trim() && (<span className="inline-flex items-center gap-1 bg-stone-100 text-stone-800 px-2.5 py-1 rounded-full text-[11px]">
                <span>&ldquo;{filter.search}&rdquo;</span>
                <button onClick={() => handleInputChange('search', '')} className="hover:text-stone-900 cursor-pointer">
                  <X className="w-3 h-3"/>
                </button>
              </span>)}

            {filter.category !== 'Semua Kategori' && (<span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-medium">
                <span>{filter.category}</span>
                <button onClick={() => handleInputChange('category', 'Semua Kategori')} className="hover:text-amber-700 cursor-pointer">
                  <X className="w-3 h-3"/>
                </button>
              </span>)}

            {filter.status !== 'Semua Status' && (<span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-medium">
                <span>{filter.status}</span>
                <button onClick={() => handleInputChange('status', 'Semua Status')} className="hover:text-amber-700 cursor-pointer">
                  <X className="w-3 h-3"/>
                </button>
              </span>)}

            {filter.location !== 'Semua Lokasi' && (<span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-medium">
                <span>{filter.location}</span>
                <button onClick={() => handleInputChange('location', 'Semua Lokasi')} className="hover:text-amber-700 cursor-pointer">
                  <X className="w-3 h-3"/>
                </button>
              </span>)}

            {filter.year !== 'Semua Tahun' && (<span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-medium">
                <span>Tahun {filter.year}</span>
                <button onClick={() => handleInputChange('year', 'Semua Tahun')} className="hover:text-amber-700 cursor-pointer">
                  <X className="w-3 h-3"/>
                </button>
              </span>)}

            {filter.areaRange !== 'Semua Luas' && (<span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-full text-[11px] font-medium">
                <span>Luas {filter.areaRange}</span>
                <button onClick={() => handleInputChange('areaRange', 'Semua Luas')} className="hover:text-amber-700 cursor-pointer">
                  <X className="w-3 h-3"/>
                </button>
              </span>)}
          </div>

          <button onClick={handleReset} className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-amber-600 font-medium transition cursor-pointer ml-auto">
            <RotateCcw className="w-3.5 h-3.5"/>
            <span>Reset Semua</span>
          </button>
        </div>)}
    </div>);
}
