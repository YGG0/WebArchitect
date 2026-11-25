'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import PackagesSection from '@/components/home/PackagesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ScrollReveal from '@/components/common/ScrollReveal';
import { INITIAL_PROJECTS } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';
const FEATURED_CATEGORIES = [
    { key: 'Villa', label: 'Villa Mewah & Resort' },
    { key: 'Rumah Tinggal', label: 'Rumah Tinggal Eksklusif' },
    { key: 'Komersial & Kantor', label: 'Komersial, Kantor & Cafe' },
    { key: 'Desain Interior', label: 'Desain Interior & Living Suite' },
];
export default function HomePage() {
    return (<div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Architecture Portfolio Section */}
        <section id="featured-portfolio" className="py-24 bg-white overflow-hidden">
          <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
                  Karya Desain Arsitektur Unggulan
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"/>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Eksplorasi portofolio pilihan kami yang dirancang berdasarkan kategori spesialisasi arsitektur dan interior.
                </p>
              </div>
            </ScrollReveal>

            {/* Per baris 4 gambar & per baris per kategori dengan animasi scroll stagger */}
            <div className="space-y-16">
              {FEATURED_CATEGORIES.map((cat, cIdx) => {
            const categoryProjects = INITIAL_PROJECTS.filter((p) => p.category === cat.key).slice(0, 4);
            return (<div key={cat.key} className="space-y-6">
                    {/* Header Kategori */}
                    <ScrollReveal animation="fade-right" delay={cIdx * 50}>
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-3 gap-2">
                        <div>
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                            {cat.label}
                          </h3>
                        </div>
                        <Link href={`/portfolio?category=${encodeURIComponent(cat.key)}`} className="text-xs font-semibold text-amber-600 hover:text-amber-700 uppercase tracking-wider inline-flex items-center gap-1 transition-colors">
                          Lihat Kategori Ini <ArrowRight className="w-3.5 h-3.5"/>
                        </Link>
                      </div>
                    </ScrollReveal>

                    {/* 4 Gambar Per Baris (Grid 4 Kolom dengan animasi muncul bertahap satu per satu) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {categoryProjects.map((project, pIdx) => (<ScrollReveal key={project.id} animation="fade-up" delay={pIdx * 60} duration={450}>
                          <ProjectCard project={project}/>
                        </ScrollReveal>))}
                    </div>
                  </div>);
        })}
            </div>

            {/* View Full Portfolio Button */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="text-center mt-16 pt-8 border-t border-stone-200">
                <Link href="/portfolio" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white font-semibold text-xs tracking-widest uppercase px-10 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                  Lihat Seluruh Portofolio <ArrowRight className="w-4 h-4"/>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <ScrollReveal animation="fade-up">
          <ServicesSection />
        </ScrollReveal>

        {/* Pricing Packages Section (Emporio Style) */}
        <ScrollReveal animation="fade-up">
          <PackagesSection />
        </ScrollReveal>

        {/* Why Choose Us */}
        <ScrollReveal animation="fade-up">
          <WhyChooseUs />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal animation="fade-up">
          <TestimonialsSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>);
}
