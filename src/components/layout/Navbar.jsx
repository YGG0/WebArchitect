'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building2 } from 'lucide-react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            // Trigger solid white navbar as soon as scrolled down
            if (window.scrollY > 30) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Portofolio', href: '/portfolio' },
        { name: 'Layanan', href: '/layanan' },
        { name: 'Paket Desain', href: '/paket' },
        { name: 'Tentang Kami', href: '/tentang-kami' },
        { name: 'Kontak', href: '/kontak' },
    ];
    const isActive = (href) => {
        if (href === '/')
            return pathname === '/';
        return pathname.startsWith(href);
    };
    return (<header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200/80'
            : 'bg-transparent border-0 border-none shadow-none'}`}>
      {/*
          Full-width container:
          - Logo pinned to the far left
          - Nav links centered in the middle
          - Balanced right spacer
        */}
      <div className="w-full px-6 sm:px-10 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-24'}`}>
          {/* 1. Left: Logo and Company Name pinned to the far left edge */}
          <div className="flex items-center min-w-[200px] lg:min-w-[280px]">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xs flex items-center justify-center transition-all duration-300 shadow-sm ${isScrolled
            ? 'bg-amber-500/10 border border-amber-500/30 text-amber-600 group-hover:bg-amber-600 group-hover:text-white'
            : 'bg-black/40 border border-white/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 backdrop-blur-xs'}`}>
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6"/>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors ${isScrolled
            ? 'text-stone-900 group-hover:text-amber-600'
            : 'text-white group-hover:text-amber-400 drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)]'}`}>
                  SPRIO<span className="text-amber-500">.</span>
                </span>
                <span className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-medium -mt-1 transition-colors ${isScrolled
            ? 'text-stone-500'
            : 'text-stone-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]'}`}>
                  Architect & Interior
                </span>
              </div>
            </Link>
          </div>

          {/* 2. Center: Navigation Menu mathematically centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-10 flex-1">
            {navLinks.map((link) => {
            const active = isActive(link.href);
            return (<Link key={link.name} href={link.href} className={`text-xs uppercase tracking-[0.2em] font-medium py-1.5 relative transition-all duration-200 ${isScrolled
                    ? active
                        ? 'text-amber-600 font-bold'
                        : 'text-stone-700 hover:text-amber-600'
                    : active
                        ? 'text-amber-400 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                        : 'text-white hover:text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'}`}>
                  {link.name}
                  {active && (<span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all ${isScrolled
                        ? 'bg-amber-600 shadow-xs'
                        : 'bg-amber-400 shadow-sm shadow-amber-400/80'}`}/>)}
                </Link>);
        })}
          </nav>

          {/* 3. Right: Balanced spacer for centering (Desktop) / Mobile Toggle */}
          <div className="flex items-center justify-end min-w-[40px] lg:min-w-[280px]">
            {/* Mobile menu toggle button */}
            <div className="flex items-center lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md transition ${isScrolled
            ? 'text-stone-800 hover:bg-stone-100'
            : 'text-white hover:bg-white/10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]'}`} aria-label="Toggle menu">
                {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (<div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-6 pt-3 pb-8 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200 text-stone-900 shadow-2xl">
          {navLinks.map((link) => {
                const active = isActive(link.href);
                return (<Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 rounded-xs text-sm font-medium tracking-wider uppercase transition-colors ${active
                        ? 'bg-amber-50 text-amber-700 font-bold border-l-2 border-amber-600 pl-4'
                        : 'text-stone-700 hover:text-amber-600 hover:bg-stone-50'}`}>
                {link.name}
              </Link>);
            })}
        </div>)}
    </header>);
}
